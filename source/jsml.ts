import * as config from './config.json';
import * as help from './misc/help';

const args: jsml.arguments = require('minimist')(process.argv.slice(2));

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
