/*eslint-env node */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeSchool Vancouver`,
        short_name: `nodeschool`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.relative(
          __dirname,
          require.resolve(`gatsby-theme-nodeschool/src/images/nodeschool-logo.png`),
        ),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
    {
      resolve: `gatsby-theme-nodeschool`,
      options: {
        title: `NodeSchool Vancouver`,
        description: `Website for NodeSchool Vancouver.`,
        twitter: `@NodeSchoolYVR`,
        github: `nodeschool/vancouver`,
        slack: ``,
        meetupGroup: `nodeschool-vancouver`,
        email: `organizers@nodeschoolyvr.com`,
        mailchimpSubscribeUrl: `https://nodeschoolyvr.us20.list-manage.com/subscribe/post?u=703e823487e1f52bfbe0cc32d&amp;id=34f1146956`,
        credits: {
          logo: {
            name: `Kenneth Ormandy`,
            url: `https://kennethormandy.com/`,
          },
        },
      },
    },
  ],
};
