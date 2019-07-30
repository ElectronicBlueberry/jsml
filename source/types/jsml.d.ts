declare namespace jsml {
	type arguments = { build: string; help: boolean; file: import("fs").PathLike };
	
	/**
     * Paramters to pass to the template
     */
	interface parameters {
		/**
		 * The key must correspond to the template name
		 * The Value is then passed to the template
		 */
		[key: string]: any
	}

	/**
	 * Compiler Options
	 */
	interface options {
		/**
		 * Path, where to chache .js templates
		 */
		cache: import("fs").PathLike
	}
}