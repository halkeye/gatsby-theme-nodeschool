var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRenderBody = exports.replaceRenderer = void 0;
const ssr_1 = __importDefault(require("./gatsby/ssr"));
exports.replaceRenderer = (0, ssr_1.default)('replaceRenderer');
exports.onRenderBody = (0, ssr_1.default)('onRenderBody');
