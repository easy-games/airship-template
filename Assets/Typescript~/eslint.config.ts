import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["*.ts"],
					defaultProject: "../tsconfig.json",
				},
			},
		},
	},
	eslintConfigPrettier,
	{
		rules: {
			"prefer-const": "warn", // prefer warning
			"@typescript-eslint/ban-ts-comment": "error", // AirshipTS does not allow this
			"@typescript-eslint/no-namespace": "off", // Namespace syntax is allowed
			"@typescript-eslint/no-unused-vars": "off", // Default no-unused-vars to off.
			"no-empty": "off",
			"no-constant-condition": "off",
		},
	},
);
