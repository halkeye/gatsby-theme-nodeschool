import {PluginOptions} from './types';

module.exports = ({i18nPlugin = {}}: PluginOptions) => ({
  plugins: [
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        ...i18nPlugin
      }
    }
  ]
});
