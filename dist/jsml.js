"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const help = __importStar(require("./misc/help"));
const args = require('minimist')(process.argv.slice(2));
if (args.help) {
    console.log(help.print(args));
    process.exit(0);
}
if (args.transpile) {
    // Transpile the .jsml file into javascript
}
if (args.build) {
    // Run the build step, running the transpiled javascript
}
if (!args.build && !args.transpile) {
    // Default behaviour, Transpile and Build
}
//# sourceMappingURL=jsml.js.map