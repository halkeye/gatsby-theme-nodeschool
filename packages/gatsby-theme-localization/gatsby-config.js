Object.defineProperty(exports, "__esModule", { value: true });
module.exports = ({ i18nPlugin = {} }) => ({
    plugins: [
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                ...i18nPlugin
            }
        }
    ]
});
