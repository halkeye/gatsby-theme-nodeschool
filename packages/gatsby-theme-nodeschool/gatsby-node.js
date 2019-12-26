/* eslint-env node */
const fs = require(`fs`);
const fsExtra = require(`fs-extra`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);
const fetch = require(`node-fetch`);
const queryString = require(`query-string`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const debug = Debug(`gatsby-theme-nodeschool`);
//const withDefaults = require(`./src/default-options`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }/*, themeOptions*/) => {
  const { program } = store.getState();
  // const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(program.directory, `data/attendees`),
    path.join(program.directory, `data/mentors`),
    path.join(program.directory, `data/photos`),
    path.join(program.directory, `data/docs`),
  ];

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

// These templates are simply data-fetching wrappers that import components
// const PostTemplate = require.resolve(`./src/templates/posts-query`)
const docsPageTemplate = require.resolve(`./src/templates/docs.jsx`);

/*
 * Create a slug for each doc. This allows for the docs to be nested in folders
 * and have the URLs match the folder structure.
 *
 * For example, if a doc is created at `docs/install/quickstart.md`, the slug
 * created for it would be `/install/quickstart/`.
 */
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: path.basename(createFilePath({ node, getNode })),
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }/*, themeOptions*/) => {
  const { createPage } = actions;
  // const { basePath } = withDefaults(themeOptions);

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create a page for each Post
  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: docsPageTemplate,
      context: {
        id: node.id,
      },
    });
  });
};

exports.onPostBootstrap = ({ store }) => {
  const { program } = store.getState();
  const publicLocales = path.join(program.directory, `public/locales`);
  console.log(`Copying locales`);
  fsExtra.copySync(path.join(__dirname, `/src/locales`), publicLocales);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MeetupEventVenue {
      address_1: String!
      address_2: String
      city: String!
      country: String!
      lat: Float!
      localized_country_name: String!
      lon: Float!
      name: String!
      repinned: Boolean!
      state: String
      zip: String
    }
    type MeetupEvent implements Node {
      id: ID!
      status: String!
      visibility: String
      created: Int
      description: String!
      name: String!
      venue: MeetupEventVenue!
      time: Int!
      utc_offset: Int!
      updated: Int!
      rsvp_limit: Int!
      member_pay_fee: Boolean!
      local_time: String!
      link: String!
      how_to_find_us: String!
      duration: Int!
      date_in_series_pattern: Boolean!
    }
  `;
  createTypes(typeDefs);
};


exports.sourceNodes = function (_ref, themeOptions) {
  if(!themeOptions.meetupGroup){
    return;
  }
  const {actions, createNodeId, createContentDigest} = _ref;
  const createNode = actions.createNode; // Gatsby adds a configOption that's not needed for this plugin, delete it

  const processGroup = (group) => {
    const nodeId = createNodeId(`meetup-group-${group.id}`);
    const nodeData = {
      ...group,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MeetupGroup`,
        contentDigest: createContentDigest(group),
      },
    };
    return nodeData;
  }; // Processes a Meetup Event as a child of a Meetup Group


  const processEvent = (event, parent)=>{
    const nodeId = createNodeId(`meetup-event-${event.id}`);
    const nodeData = {
      ...event,
      id: nodeId,
      parent,
      children: [],
      internal: {
        type: `MeetupEvent`,
        contentDigest: createContentDigest(event),
      },
    };
    return nodeData;
  };

  const groupUrlName = themeOptions.meetupGroup;
  const apiOptions = {
    status: `upcoming,past`,
    desc: `true`,
    page: 10,
  };

  const queryStringOptions = queryString.stringify(apiOptions);
  const apiGroupUrl = `https://api.meetup.com/${groupUrlName}?${queryStringOptions}`;
  const apiEventsUrl = `https://api.meetup.com/${groupUrlName}/events?${queryStringOptions}`; // Gatsby expects sourceNodes to return a promise

  return (// Fetch a response from the apiUrl
    Promise.all([fetch(apiGroupUrl), fetch(apiEventsUrl)]) // Parse the response as JSON
    .then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }) // Process the JSON data into a node
    .then(function (dataArray) {
      const [groupData, eventData] = dataArray; // For each query result (or 'hit')

      const groupNode = processGroup(groupData);
      groupNode.events___NODE = Object.values(eventData).map(function (event) {
        const nodeData = processEvent(event, groupNode.id);
        createNode(nodeData);
        return nodeData.id;
      });
      createNode(groupNode);
    })
  );
};