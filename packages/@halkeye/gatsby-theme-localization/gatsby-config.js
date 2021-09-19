Object.defineProperty(exports, "__esModule", { value: true });
module.exports = ({ i18nPlugin = {} }) => ({
    plugins: [
        {
            resolve: 'gatsby-plugin-react-i18next',
            options: {
                ...i18nPlugin
            }
        }
    ]
});
