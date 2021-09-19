var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_xhr_backend_1 = __importDefault(require("i18next-xhr-backend"));
i18next_1.default.use(i18next_xhr_backend_1.default).use(react_i18next_1.initReactI18next);
// initialized outside of here so I can read the plugin options
exports.default = i18next_1.default;
