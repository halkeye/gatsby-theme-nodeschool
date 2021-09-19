var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceRenderer = void 0;
const server_1 = require("react-dom/server");
const i18n_1 = __importDefault(require("../../i18n"));
const getLangFromPath_1 = __importDefault(require("../../utils/getLangFromPath"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const defaultOptions_1 = require("../../defaultOptions");
const replaceRenderer = ({ bodyComponent, pathname, replaceBodyHTMLString }, { languages = [], namespaces = [], ...options }) => {
    const langFromPathname = (0, getLangFromPath_1.default)(pathname);
    const initialLang = languages.includes(langFromPathname)
        ? langFromPathname
        : options.defaultLng || 'en';
    const resources = languages.reduce((acc, lang) => {
        return {
            ...acc,
            [lang]: namespaces.reduce((acc, ns) => {
                const file = fs_1.default.readFileSync(path_1.default.resolve(options.localesDir, `./${lang}/${ns}.json`), 'utf8');
                const parsedTranslations = JSON.parse(file);
                return {
                    ...acc,
                    [ns]: parsedTranslations
                };
            }, {})
        };
    }, {});
    const i18nextOptions = options.i18next || {};
    i18n_1.default.init({
        ...defaultOptions_1.i18nextOptions,
        ...i18nextOptions,
        lng: initialLang,
        resources
    });
    i18n_1.default.changeLanguage(initialLang, () => {
        replaceBodyHTMLString((0, server_1.renderToString)(bodyComponent));
    });
};
exports.replaceRenderer = replaceRenderer;
