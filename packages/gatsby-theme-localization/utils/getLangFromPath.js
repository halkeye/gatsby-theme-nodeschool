Object.defineProperty(exports, "__esModule", { value: true });
const getLangFromPath = (pathname) => {
    const split = pathname.split('/').filter(nonEmpty => nonEmpty);
    return split[0];
};
exports.default = getLangFromPath;
