/* eslint-env node */
const fs = require(`fs`);
const path = require(`path`);
const debug = require(`debug`)(`gatsby-theme-nodeschool`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = async ({ store }/*, themeOptions*/) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `data/attendees`),
    path.join(program.directory, `data/mentors`),
    path.join(program.directory, `data/photos`),
    path.join(program.directory, `data/docs`),
    path.join(program.directory, `data/sponsors`),
  ];

  for (const dir of dirs) {
    debug(`Initializing ${dir} directory`);
    await fs.promises.mkdir(dir, { recursive: true });
  }
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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // the source name will be on this parent node
    const { sourceInstanceName } = getNode(node.parent);

    // add the source name to the Mdx node
    createNodeField({
      node,
      name: `source`,
      value: sourceInstanceName,
    });
  }
};
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SponsorsYaml implements Node {
      name: String
      logo: File @fileByRelativePath
      link: String
    }

    type MentorsYaml implements Node {
      name: String
      twitter: String
      github: String
    }
    type SiteSiteMetadata {
      title: String
      description: String
      defaultLanguage: String
      url: String
      twitter: String
      github: String
      slack: String
      meetupGroup: String
      email: String
      mailchimpSubscribeUrl: String
      credits: SiteSiteMetadataCredits
      author: String
    }
    type SiteSiteMetadataCredits {
      logo: SiteSiteMetadataCreditsLogo
    }
    type SiteSiteMetadataCreditsLogo {
      name: String
      url: String
    }
  `);
};
