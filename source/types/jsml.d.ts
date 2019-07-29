declare namespace jsml {
	type arguments = { build: string; help: boolean; file: string };
	type config = {};
	/**
     * The key must correspond to the template name
     * The Value is then passed to the template
     */
	type options = { [key: string]: any };
}
