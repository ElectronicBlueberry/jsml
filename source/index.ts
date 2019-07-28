/**
 * Builds .jsml templates into .html
 * @param input_folder Path to .jsml template input folder
 * @param output_folder Path to .html output folder
 * @param content_folder Path to content folder, which will be fed to the .jsml templates
 * @param options options for the .jsml templates
 */
function build(input_folder: string, output_folder: string, content_folder: string) {}

/**
 * Transpiles .jsml files to .js files
 * @param input_folder .jsml input folder
 * @param output_folder .js output folder
 */
function transpile(input_folder: string, output_folder: string) {}

/**
 * Runs .js template files, which have been transpiled from .jsml, to generate .html files
 * @param input_folder Path to .js template input folder
 * @param output_folder Path to .html output folder
 * @param content_folder Path to content folder, which will be fed to the .jsml templates
 * @param options options for the .jsml templates
 */
function run(input_folder: string, output_folder: string, content_folder: string) {}

/**
 * Overwrite the current configuration
 * @param config config object
 */
function setConfig(config: jsml.config) {}

export { build, transpile, run };
