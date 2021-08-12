import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import pkg from './package.json'

export default defineConfig({
    base: process.env.NODE_ENV !== 'production' ? '/' : `/${pkg.name}/`,
    plugins:[
        reactRefresh(),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: name => `antd/es/${name}/style`
                }
            ]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {}
            }
        }
    }
})