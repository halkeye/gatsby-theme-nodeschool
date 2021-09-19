var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const router_1 = require("@reach/router");
const withLocation = (Component) => {
    const WithLocationComponent = props => {
        return (react_1.default.createElement(router_1.Location, null, ({ location, navigate }) => {
            const allProps = {
                ...props,
                location,
                navigate
            };
            return react_1.default.createElement(Component, { ...allProps });
        }));
    };
    return WithLocationComponent;
};
exports.default = withLocation;
