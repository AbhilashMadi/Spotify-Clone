import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname,"./src/App.tsx"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@sections": path.resolve(__dirname, "./src/components/sections/index.ts"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms/index.ts"),
      "@common": path.resolve(__dirname, "./src/components/common/index.ts"),
      "@routes": path.resolve(__dirname, "./src/routes/routes.ts"),
      "@assets": path.resolve(__dirname, "./src/assets/assets.ts"),
      "@labels": path.resolve(__dirname, "./src/constants/labels.ts"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@types": path.resolve(__dirname, "./src/types/types.ts"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@forms": path.resolve(__dirname, "./src/components/forms/index.ts"),
      "@css": path.resolve(__dirname,"./src/css"),
    },
  },
})