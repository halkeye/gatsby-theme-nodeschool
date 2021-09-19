Object.defineProperty(exports, "__esModule", { value: true });
const getPathWithoutLanguage = (pathname) => {
    const split = pathname.split('/').filter(nonEmpty => nonEmpty);
    split.shift();
    const hasTrailingSlash = pathname.endsWith('/');
    return `/${split.join('/')}${hasTrailingSlash ? '/' : ''}`;
};
exports.default = getPathWithoutLanguage;
