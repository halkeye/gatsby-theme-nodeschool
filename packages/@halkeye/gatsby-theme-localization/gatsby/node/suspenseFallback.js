/**
 * Functionality for using custom suspense fallback component
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateWebpackConfig = exports.onPreInit = void 0;
let suspenseFallbackComponent;
const onPreInit = ({}, { suspenseFallback }) => {
    const defaultFallback = './components/DefaultFallback';
    const optionComponent = suspenseFallback || defaultFallback;
    suspenseFallbackComponent = optionComponent;
};
exports.onPreInit = onPreInit;
const onCreateWebpackConfig = ({ actions, plugins }) => {
    actions.setWebpackConfig({
        plugins: [
            plugins.define({
                'process.env.GATSBY_SUSPENSE_FALLBACK': JSON.stringify(suspenseFallbackComponent)
            })
        ]
    });
};
exports.onCreateWebpackConfig = onCreateWebpackConfig;
