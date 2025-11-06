import globals from "globals";
import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      jest,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off"
    },
  },
]);
