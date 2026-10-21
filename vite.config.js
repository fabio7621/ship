import { defineConfig } from 'vite';

// 相對路徑：部署到 GitHub Pages 的 https://<user>.github.io/<repo>/ 子路徑時資源才找得到
export default defineConfig({
  base: './',
});
