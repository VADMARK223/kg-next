import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        files: ["**/*.{js,ts,jsx,tsx}"], // Укажите, к каким файлам применяется настройка
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn"],
            "no-console": ["warn", {"allow": ["warn", "error"]}]
        }
    }
];

export default eslintConfig;
