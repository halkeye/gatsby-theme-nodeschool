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
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const withLocation_1 = __importDefault(require("./utils/withLocation"));
const getLangFromPath_1 = __importDefault(require("./utils/getLangFromPath"));
const getPathWithoutLang_1 = __importDefault(require("./utils/getPathWithoutLang"));
// const trimSlashes = (str: string) => {
//   const withoutTrailing = str.endsWith("/")
//     ? str.substring(0, str.length - 1)
//     : str;
//   const withoutPrepended = withoutTrailing.startsWith("/")
//     ? withoutTrailing.substring(1)
//     : withoutTrailing;
//   return withoutPrepended;
// };
const trimSlashes = (str, c = '/') => {
    if (c === ']')
        c = '\\]';
    if (c === '\\')
        c = '\\\\';
    return str.replace(new RegExp('^[' + c + ']+|[' + c + ']+$', 'g'), '');
};
const WrapRoot = ({ children, location, navigate, options: { languages = [], allowIndex = false, defaultLng = 'en' } }) => {
    const [, i18n] = (0, react_i18next_1.useTranslation)();
    const lang = (0, react_1.useMemo)(() => {
        return (0, getLangFromPath_1.default)(location.pathname);
    }, [location.pathname]);
    (0, react_1.useEffect)(() => {
        if (languages.includes(lang) && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n, languages]);
    (0, react_1.useEffect)(() => {
        const currentLang = lang;
        if (languages.includes(currentLang) && currentLang !== i18n.language) {
            const currentPathWithoutLanguage = (0, getPathWithoutLang_1.default)(location.pathname);
            const trimmedPath = trimSlashes(currentPathWithoutLanguage);
            const newPath = `/${i18n.language}/${trimmedPath}${trimmedPath ? '/' : ''}`;
            navigate(newPath);
        }
    }, [i18n.language, languages, lang, navigate, location.pathname]);
    const renderChildren = (0, react_1.useMemo)(() => {
        if (allowIndex)
            return true;
        if (location.pathname === '/') {
            return allowIndex;
        }
        return true;
    }, [location.pathname, allowIndex]);
    (0, react_1.useEffect)(() => {
        if (!renderChildren) {
            const probableLanguage = navigator.language;
            navigate(`/${languages.includes(probableLanguage) ? probableLanguage : defaultLng}/`, { replace: true });
        }
    }, [renderChildren, navigate, languages]);
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = (0, withLocation_1.default)(WrapRoot);
