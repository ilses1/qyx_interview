import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Path from 'path'


// 导入svg处理插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', //import.meta.env.BASE_URL默认为斜杠
  plugins: [vue(),
  // 打包svg
  createSvgIconsPlugin({
    // 指定svg图标目录
    iconDirs: [Path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  }),

  ],

})
