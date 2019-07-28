function print(args: jsml.arguments): string {
	// default behaviour
	return `Usage: jsml.ts [options]

Valid Options are:
Default behaviour : Builds all .jsml files into html files. Provide input Files
[file] [file] [file] [...] : Input Files
[folder] [...] : Input Folder

--transpile : Transpiles .jsml files into javascript, does not build html files. No Input Files required
--build : Runs the transpiled javascript to generate .html files. Provide Input Files

--config=[file.json] : Custom config file
--file=[file] : Specify a single .jsml file to transpile/build

--help : This command
`;
}

export { print };
