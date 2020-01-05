/* eslint-env node */
const withDefault = require(`./src/default-options`);
const url = require(`url`);

const loadLanguageResources = (languages, languageNamespaces) => 
  languages.reduce((resources, language) =>{
    resources[language]=languageNamespaces.reduce((langNamespaces, namespace) =>{
      langNamespaces[namespace]=require(`${__dirname}/src/locales/${language}/${namespace}.json`);
      return langNamespaces;
    }, {});
    return resources;
  }, {});

module.exports = (options = {}) => {
  const themeOptions = withDefault(options);
  const languages = [`en`, `pt`, `pt-BR`];
  const languageNamespaces = [`translation`];
  return {
    siteMetadata: themeOptions,
    pathPrefix: themeOptions.url ? url.parse(themeOptions.url).path : ``,
    plugins: [
      {
        resolve: `gatsby-theme-localization`,
        options: {
          languages: languages,
          namespaces: languageNamespaces,
          localesDir: `${__dirname}/src/locales`,
          allowIndex: true,
          defaultLng: themeOptions.defaultLanguage,
          i18next: {
            resources: loadLanguageResources(languages, languageNamespaces),
            fallbackLng: {
              default: [ themeOptions.defaultLanguage ],
            },
            react: {
              wait: false,
              useSuspense: false,
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
