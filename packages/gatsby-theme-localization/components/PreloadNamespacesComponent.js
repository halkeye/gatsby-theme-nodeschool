var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const const_1 = require("../utils/const");
// this is a hacky component which basically sets a global variable
const createPreloadNamespacesComponent = ({ resourceBundle }) => {
    const PreloadNamespacesComponent = () => {
        return (react_1.default.createElement("script", { type: "text/javascript", dangerouslySetInnerHTML: {
                __html: `window.${const_1.globalResourceBundleName} = '${resourceBundle}'`
            } }));
    };
    return PreloadNamespacesComponent;
};
exports.default = createPreloadNamespacesComponent;
