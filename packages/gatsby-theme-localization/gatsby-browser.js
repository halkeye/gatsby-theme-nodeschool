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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRootElement = void 0;
const react_1 = __importStar(require("react"));
const i18n_1 = __importDefault(require("./i18n"));
const wrap_root_1 = __importDefault(require("./wrap-root"));
const getLangFromPath_1 = __importDefault(require("./utils/getLangFromPath"));
const defaultOptions_1 = require("./defaultOptions");
const react_i18next_1 = require("react-i18next");
const preferDefault_1 = __importDefault(require("./utils/preferDefault"));
const const_1 = require("./utils/const");
const getInitialLang = (pathname, options) => {
    const pathLang = (0, getLangFromPath_1.default)(pathname);
    if (options.languages.includes(pathLang))
        return pathLang;
    if (options.languages.includes(navigator.language))
        return navigator.language;
    return options.defaultLng || 'en';
};
const wrapRootElement = ({ element }, options) => {
    const initialLang = getInitialLang(window.location.pathname, options);
    const i18nextOptions = options.i18next || {};
    i18n_1.default.init({
        ...defaultOptions_1.i18nextOptions,
        ...i18nextOptions,
        lng: initialLang
    });
    const Fallback = (0, preferDefault_1.default)(require(process.env.GATSBY_SUSPENSE_FALLBACK || ''));
    const MaybeSuspense = typeof document !== 'undefined' ? react_1.Suspense : react_1.Fragment;
    if (options.embedTranslations) {
        const resourceBundle = JSON.parse(window[const_1.globalResourceBundleName]);
        resourceBundle.forEach(rb => {
            Object.entries(rb.namespaces).forEach(([ns, bundle]) => {
                i18n_1.default.addResourceBundle(rb.lang, ns, bundle);
            });
        });
    }
    return (react_1.default.createElement(MaybeSuspense, { fallback: react_1.default.createElement(Fallback, null) },
        react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: i18n_1.default },
            react_1.default.createElement(wrap_root_1.default, { options: options }, element))));
};
exports.wrapRootElement = wrapRootElement;
