import { PathLike } from "fs";

/**
 * Builds .jsml templates into .html
 * @param input_folder Path to .jsml template input folder
 * @param output_folder Path to .html output folder
 * @param content_folder Path to content folder, which will be fed to the .jsml templates
 * @param options compiler options
 * @param parameters parameters to pass to template
 */
function build(input_folder: PathLike, output_folder: PathLike, content_folder: PathLike, options?: jsml.options, parameters?: jsml.parameters) {}

/**
 * Compiles .jsml files to .js template files
 * @param input_folder .jsml input folder
 * @param output_folder .js template output folder
 * @param options compiler options
 */
function compile(input_folder: PathLike, output_folder: PathLike, options?: jsml.options) {}

/**
 * Runs .js template files, which have been transpiled from .jsml, to generate .html files
 * @param input_folder Path to .js template input folder
 * @param output_folder Path to .html output folder
 * @param content_folder Path to content folder, which will be fed to the .jsml templates
 * @param parameters parameters to pass to template
 */
function template(input_folder: PathLike, output_folder: PathLike, content_folder: PathLike, parameters?: jsml.parameters) {}

export { build, compile, template};
