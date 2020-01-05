/* eslint-env node */
const withDefault = require(`./src/default-options`);
const url = require(`url`);
module.exports = (options = {}) => {
  const themeOptions = withDefault(options);
  return {
    siteMetadata: themeOptions,
    pathPrefix: themeOptions.url ? url.parse(themeOptions.url).path : ``,
    plugins: [
      {
        resolve: `gatsby-theme-localization`,
        options: {
          languages: [`en`, `pt`, `pt-BR`],
          namespaces: [`translation`],
          localesDir: `${__dirname}/src/locales`,
          allowIndex: true,
          defaultLng: themeOptions.defaultLanguage,
          suspenseFallback: `${__dirname}/src/components/fallback`,
          embedTranslations: {
            preloadFallbackLng: true,
            preloadNamespaces: [
              {
                regex: `/.*/`,
                namespaces: [`translation`],
              },
            ],
          },
          i18next: {
            fallbackLng: {
              default: [ `en` ],
            },
            react: {
              wait: false,
              useSuspense: true,
            },
            debug: process.env.NODE_ENV !== `production`,
            interpolation: {
              escapeValue: false,
            },
          },
          i18nPlugin: {
            langKeyDefault: themeOptions.defaultLanguage,
            useLangKeyLayout: false,
            prefixDefault: true,
          },
        },
      },
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
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `data/docs`,
          name: `docs`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
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
          remarkPlugins: [require(`remark-slug`)],
        },
      },
    ].filter(Boolean),
  };
};
