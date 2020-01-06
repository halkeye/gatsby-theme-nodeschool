/* eslint-env node */
const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const debug = Debug(`gatsby-theme-nodeschool`);
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
