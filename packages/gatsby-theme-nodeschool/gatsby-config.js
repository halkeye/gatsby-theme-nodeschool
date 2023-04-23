/* eslint-env node */
const withDefault = require(`./src/default-options`);
const path = require(`path`);
const url = require(`url`);

module.exports = (options = {}) => {
  const themeOptions = withDefault(options); // FIXME - move in here
  console.log(`themeOptions`, themeOptions);
  const config = {
    siteMetadata: themeOptions,
    pathPrefix: themeOptions.url ? url.parse(themeOptions.url).path : ``,
    plugins: [
      {
        resolve: `gatsby-plugin-react-i18next`,
        options: {
          localeJsonSourceName: `translations`, // name given to `gatsby-source-filesystem` plugin.
          defaultLanguage: themeOptions.defaultLanguage,
          fallbackLanguage: `en`,
          languages: [themeOptions.defaultLanguage],
          redirect: false,
          // defaultLanguage: themeOptions.defaultLanguage,
          siteUrl: themeOptions.url,
          // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
          trailingSlash: `always`,
          // you can pass any i18next options
          i18nextOptions: {
            lng: themeOptions.defaultLanguage,
            fallbackLanguage: `en`,
            debug: process.env.NODE_ENV !== `production`,
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: [`br`, `strong`, `i`, `p`, `code`],
            interpolation: {
              escapeValue: false, // not needed for react as it escapes by default
            },
            keySeparator: false,
            nsSeparator: false,
          },
        },
      },
      `gatsby-plugin-slug`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `@halkeye/gatsby-plugin-google-fonts-v2`,
        options: {
          fonts: [
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `600`, `700`],
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-yaml`,
      themeOptions.meetupGroup ? {
        resolve: `gatsby-source-meetup`,
        options: {
          groupUrlName: themeOptions.meetupGroup,
          status: `upcoming,past`,
          desc: `true`,
          page: 10,
          eventsOptions: [
            {
              status: `upcoming`,
              desc: `false`,
              page: 1,
            },
            {
              status: `past`,
              desc: `true`,
              page: 10,
            },
          ],
        },
      } : null,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
      `gatsby-plugin-catch-links`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
          ignore: [`.keep`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `translations`,
          path: `${__dirname}/src/locales`,
          ignore: [`.keep`],
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          mdxOptions: {
            remarkPlugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  // should this be configurable by the end-user?
                  maxWidth: 1380,
                  linkImagesToOriginal: false,
                },
              },
              { resolve: `gatsby-remark-copy-linked-files` },
              { resolve: `gatsby-remark-smartypants` },
            ],
          },
        },
      },
    ].filter(Boolean),
  };
  [`attendees`, `mentors`, `photos`, `docs`, `sponsors`, ``].forEach(section => {
    config.plugins.unshift({
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(process.cwd(), `data`, section),
        name: section || undefined,
        ignore: [`.keep`],
      },
    });
  });
  return config;

};
