var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPostBootstrap = exports.onPreBootstrap = exports.onPreInit = exports.onCreateWebpackConfig = void 0;
const node_1 = __importDefault(require("./gatsby/node"));
exports.onCreateWebpackConfig = (0, node_1.default)('onCreateWebpackConfig');
exports.onPreInit = (0, node_1.default)('onPreInit');
exports.onPreBootstrap = (0, node_1.default)('onPreBootstrap');
exports.onPostBootstrap = (0, node_1.default)('onPostBootstrap');
