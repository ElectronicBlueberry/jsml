"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cnfg = __importStar(require("./config.json"));
let currentConfig;
resetConfig();
/**
 * Builds .jsml templates into .html
 * @param input_folder Path to .jsml template input folder
 * @param output_folder Path to .html output folder
 * @param content_folder Path to content folder, which will be fed to the .jsml templates
 * @param options options for the .jsml templates
 */
function build(input_folder, output_folder, content_folder, options) { }
exports.build = build;
/**
 * Transpiles .jsml files to .js files
 * @param input_folder .jsml input folder
 * @param output_folder .js output folder
 */
function transpile(input_folder, output_folder) { }
exports.transpile = transpile;
/**
 * Runs .js template files, which have been transpiled from .jsml, to generate .html files
 * @param input_folder Path to .js template input folder
 * @param output_folder Path to .html output folder
 * @param content_folder Path to content folder, which will be fed to the .jsml templates
 * @param options options for the .jsml templates
 */
function run(input_folder, output_folder, content_folder, options) { }
exports.run = run;
/**
 * Overwrite the current configuration
 * @param config config object
 */
function setConfig(config) {
    Object.assign(currentConfig, config);
}
exports.setConfig = setConfig;
/**
 * Resets Configuration to default
 */
function resetConfig() {
    currentConfig = JSON.parse(JSON.stringify(cnfg));
}
exports.resetConfig = resetConfig;
//# sourceMappingURL=index.js.map