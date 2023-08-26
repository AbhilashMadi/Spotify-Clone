import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@sections": path.resolve(__dirname, "./src/components/sections/index.ts"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms/index.ts"),
      "@common": path.resolve(__dirname, "./src/components/common/index.ts"),
      "@routes": path.resolve(__dirname,"./src/routes/routes.ts"),
    },
  },
})