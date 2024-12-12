import { defineConfig } from "vite";

export default defineConfig({
    css: {
        modules: {
            scopeBehaviour: 'local',
            generateScopeName: '[name]__[local]__[hash:base64:5]',
        }
    }
})