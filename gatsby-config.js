/* eslint-env node */
module.exports = (options = {}) => {
  options = {
    title: `Unknown Nodeschool`,
    description: `Website for NodeSchool Vancouver.`,
    twitter: ``,
    github: ``,
    slack: ``,
    meetupGroup: ``,
    email: ``,
    mailchimpSubscribeUrl: ``,
    credits: {
      logo: {
        name: ``,
        url: ``,
      },
    },
    ...options,
  };

  return {
    siteMetadata: options,
    pathPrefix: require(`./data/path-prefix.js`),
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
      options.meetupGroup ? {
        resolve: `gatsby-source-meetup`,
        options: {
          groupUrlName: options.meetupGroup,
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
