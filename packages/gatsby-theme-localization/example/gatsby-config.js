module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-localization`,
      options: {
        languages: ['en', 'bg'],
        namespaces: ['translation', 'about', 'contact'],
        localesDir: './src/locales',
        allowIndex: false,
        defaultLng: 'en',
        suspenseFallback: require.resolve(`./src/components/fallback`),
        embedTranslations: {
          preloadFallbackLng: true,
          preloadNamespaces: [
            {
              regex: '/.*/',
              namespaces: ['translation']
            },
            {
              regex: '/about/',
              namespaces: ['about'],
              /* redundant as 'en' is fallbackLng (from i18next) and
                 will always be loaded (because of preloadFallbackLng: true), 
                 but just for the example */
              languages: ['en']
            }
          ]
        },
        i18next: {
          fallbackLng: 'en',
          react: {
            wait: true,
            useSuspense: true
          },
          debug: process.env.NODE_ENV !== 'production'
        },
        i18nPlugin: {
          // whatever you want to pass to gatsby-plugin-i18n
          langKeyDefault: 'en',
          useLangKeyLayout: false
        }
      }
    }
  ]
};
