Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPluginOptions = exports.i18nextOptions = void 0;
exports.i18nextOptions = {
    interpolation: {
        escapeValue: false // not needed for react as it escapes by default
    },
    react: {
        useSuspense: false
    }
};
exports.defaultPluginOptions = {
    languages: [],
    namespaces: [],
    localesDir: './src/locales'
};
