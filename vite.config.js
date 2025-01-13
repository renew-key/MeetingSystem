import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      TOKEN: JSON.stringify(env.TOKEN),
      REFRESH_TOKE: JSON.stringify(env.REFRESH_TOKE),
      BASE_URL: JSON.stringify(env.VITE_BASE_URL),
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "vue-i18n"],
        dts: "src/auto-imports.js",
      }),
      Components({
        // 從 `./src/components/` 路徑查找
        extensions: ["vue"],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: "src/auto-components.js",
      }),
      Pages(),
      Layouts(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
    },
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      proxy: {
        '/kingixa/api': {
          target: env.VITE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/kingixa\/api/, '')
        },
      }
    }
  };
});
