/**
 * Functionality for moving (and watching) translation files into public folder
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPostBootstrap = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chokidar_1 = __importDefault(require("chokidar"));
const defaultOptions_1 = require("../../defaultOptions");
let beingMoved = false;
let waitingPrevious = false;
const publicDir = './public/locales';
const options = defaultOptions_1.defaultPluginOptions;
const movingDone = ({ reporter }) => new Promise(resolve => {
    if (!beingMoved) {
        resolve();
        return;
    }
    waitingPrevious = true;
    const interval = setInterval(() => {
        reporter.info('Waiting previous moving to finish...');
        if (!beingMoved) {
            reporter.info('Previous moving finished!');
            clearInterval(interval);
            waitingPrevious = false;
            resolve();
        }
    }, 1000);
});
// copy and minify json files
const moveFiles = async (args) => {
    const { reporter } = args;
    await movingDone(args);
    beingMoved = true;
    // setup dirs first
    if (!fs_1.default.existsSync(publicDir)) {
        reporter.info('Creating locales folder');
        fs_1.default.mkdirSync(publicDir);
    }
    options.languages.forEach(lang => {
        const dir = `${publicDir}/${lang}`;
        if (!fs_1.default.existsSync(dir)) {
            reporter.info(`Creating language directory for ${lang}`);
            fs_1.default.mkdirSync(dir);
        }
    });
    await options.languages.map(lang => {
        const namespacesPromises = options.namespaces.map(ns => {
            return new Promise((resolve, reject) => {
                fs_1.default.readFile(path_1.default.resolve(options.localesDir, `./${lang}/${ns}.json`), 'utf8', (err, rawJson) => {
                    if (err)
                        reject(err);
                    const jsonToWrite = !!rawJson
                        ? JSON.stringify(JSON.parse(rawJson))
                        : JSON.stringify({});
                    fs_1.default.writeFile(path_1.default.resolve(publicDir, `./${lang}/${ns}.json`), jsonToWrite, () => {
                        resolve();
                    });
                });
            });
        });
        return Promise.all(namespacesPromises);
    });
    reporter.success('Moved and minified all translations to locale directory');
    beingMoved = false;
    return;
};
const onPostBootstrap = async (args, userOptions) => {
    if (!userOptions)
        throw new Error('No options specified for gatsby-theme-localization');
    const { reporter } = args;
    options.languages = userOptions.languages || options.languages;
    options.namespaces = userOptions.namespaces || options.namespaces;
    options.localesDir = userOptions.localesDir || options.localesDir;
    await moveFiles(args);
    // set up listeners while developing
    if (process.env.NODE_ENV !== 'production') {
        reporter.info('Set up locale file listener!');
        const watcher = chokidar_1.default.watch(path_1.default.resolve(options.localesDir));
        const moveFn = () => {
            reporter.info('Locale files changed!');
            if (!waitingPrevious) {
                moveFiles(args);
            }
            else {
                reporter.info('Moving already in queue, skipping...');
            }
        };
        watcher.on('change', moveFn);
        watcher.on('add', moveFn);
    }
    return;
};
exports.onPostBootstrap = onPostBootstrap;
