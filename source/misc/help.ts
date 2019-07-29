function print(args: jsml.arguments): string {
	// default behaviour
	return `Usage: jsml.ts [options]

Valid Options are:
Default behaviour : Builds all .jsml files into html files. Provide content Files

--templates=[folder] : Path to the folder containing .jsml templates
--content=[folder] : Path to the folder containint content files
--output=[folder] : Path to Output files to

--build=transpile : Transpiles .jsml files into javascript, does not build html files. No content Files required
--build=run : Runs the transpiled javascript to generate .html files. Provide content Files

--watch=all : Watches and rebuilds on template/content changes
--watch=content : Watches and rebuilds on content changes only

--help : This command
`;
}

export { print };
