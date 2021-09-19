var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const react_i18next_1 = require("react-i18next");
const Link = ({ to, prefixLanguage, preloadNamespaces, ...props }) => {
    const [, i18n] = (0, react_i18next_1.useTranslation)();
    const enhancedTo = (0, react_1.useMemo)(() => {
        if (!prefixLanguage)
            return to;
        return `/${i18n.language}${to}`;
    }, [i18n.language, prefixLanguage, to]);
    const handleMouseOver = (0, react_1.useCallback)(() => {
        if (!!preloadNamespaces) {
            i18n.loadNamespaces(preloadNamespaces);
        }
    }, [i18n, preloadNamespaces]);
    return (react_1.default.createElement(gatsby_1.Link, { to: enhancedTo, onMouseOver: handleMouseOver, ...props }));
};
Link.defaultProps = {
    prefixLanguage: true,
    preloadNamespaces: []
};
exports.default = Link;
