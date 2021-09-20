/* eslint-env node */
const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const debug = require(`debug`)(`gatsby-theme-nodeschool`);

// const withDefaults = require(`./src/default-options`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }/*, themeOptions*/) => {
  const { program } = store.getState();

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
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: docsPageTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
