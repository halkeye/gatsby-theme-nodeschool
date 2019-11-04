/* eslint-env node */
const withDefault = require('./utils/default-options')
const url = require('url');
module.exports = (options = {}) => {
  const themeOptions = withDefault(options);
  return {
    siteMetadata: themeOptions,
    pathPrefix: themeOptions.url ? url.parse(themeOptions.url).path : '',
    plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `600`, `700`],
            },
          ],
        },
      },
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-transformer-yaml`,
      `gatsby-transformer-json`,
      `gatsby-plugin-sharp`,
      themeOptions.meetupGroup ? {
        resolve: `gatsby-source-meetup`,
        options: {
          groupUrlName: themeOptions.meetupGroup,
          status: `upcoming,past`,
          desc: `true`,
          page: 10,
        },
      } : null,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-catch-links`,
    ].filter(Boolean),
  };
};
