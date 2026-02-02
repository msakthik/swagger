import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);


// export default [
//   {
//     files: ["**/*.js"],
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//     rules: {
//       "no-unused-vars": "warn",
//       "no-undef": "error",
//       "no-console": "off",
//       "semi": ["error", "always"],
//       "quotes": ["error", "single"],
//     },
//   },
// ];
