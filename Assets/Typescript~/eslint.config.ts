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
);
