import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
	files: ["Code/**/*.ts"],
	languageOptions: {
		parserOptions: {
			projectService: true,
		},
	},
});
