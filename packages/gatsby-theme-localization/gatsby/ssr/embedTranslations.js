var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRenderBody = void 0;
const react_1 = __importDefault(require("react"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const PreloadNamespacesComponent_1 = __importDefault(require("../../components/PreloadNamespacesComponent"));
const getLangFromPath_1 = __importDefault(require("../../utils/getLangFromPath"));
const onRenderBody = ({ pathname, setHeadComponents }, options) => {
    if (!options.embedTranslations)
        return;
    const langFromPathname = (0, getLangFromPath_1.default)(pathname);
    const namespacesToPreloadSet = new Set([]);
    const languagesToPreloadSet = new Set([langFromPathname]);
    if (options.embedTranslations.preloadFallbackLng &&
        options.i18next &&
        options.i18next.fallbackLng) {
        const { fallbackLng } = options.i18next;
        if (typeof fallbackLng === 'string') {
            languagesToPreloadSet.add(fallbackLng);
        }
        else if (Array.isArray(fallbackLng)) {
            fallbackLng.forEach(lang => languagesToPreloadSet.add(lang));
        }
        else if (typeof fallbackLng === 'object') {
            Object.values(fallbackLng).forEach(langs => {
                langs.forEach((lang) => {
                    languagesToPreloadSet.add(lang);
                });
            });
        }
    }
    options.embedTranslations.preloadNamespaces.forEach(opt => {
        if (opt.exact === pathname) {
            opt.namespaces.forEach(ns => {
                namespacesToPreloadSet.add(ns);
            });
            if (opt.languages) {
                opt.languages.forEach(lang => {
                    languagesToPreloadSet.add(lang);
                });
            }
        }
        if (opt.regex) {
            const regex = new RegExp(opt.regex);
            if (regex.test(pathname)) {
                opt.namespaces.forEach(ns => {
                    namespacesToPreloadSet.add(ns);
                });
                if (opt.languages) {
                    opt.languages.forEach(lang => {
                        languagesToPreloadSet.add(lang);
                    });
                }
            }
        }
    });
    // convert the Set to an array and remove invalid values
    const namespacesToPreload = [...namespacesToPreloadSet].filter(ns => {
        return options.namespaces.includes(ns);
    });
    const languagesToPreload = [...languagesToPreloadSet].filter(lang => {
        return options.languages.includes(lang);
    });
    const resourceBundle = [];
    languagesToPreload.forEach(lang => {
        const obj = {
            lang: lang,
            namespaces: namespacesToPreload.reduce((acc, ns) => {
                const file = fs_1.default.readFileSync(path_1.default.resolve(options.localesDir, `./${lang}/${ns}.json`), 'utf8');
                const parsedTranslations = JSON.parse(file);
                return {
                    ...acc,
                    [ns]: parsedTranslations
                };
            }, {})
        };
        resourceBundle.push(obj);
    });
    const Component = (0, PreloadNamespacesComponent_1.default)({
        resourceBundle: JSON.stringify(resourceBundle).replace(/'/g, "\\'")
    });
    setHeadComponents([react_1.default.createElement(Component, { key: "resourceBundle" })]);
};
exports.onRenderBody = onRenderBody;
