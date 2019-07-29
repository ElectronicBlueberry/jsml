import * as help from './misc/help';

const args: jsml.arguments = require('minimist')(process.argv.slice(2));

if (args.help) {
	console.log(help.print(args));
	process.exit(0);
}

if (args.build === 'transpile') {
	// Transpile the .jsml file into javascript
}

if (args.build === 'run') {
	// Run the build step, running the transpiled javascript
}

{
	// Default behaviour, Full Build
	console.log(process.cwd());
}
