import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import {rmSync} from "fs";

// https://vitejs.dev/config/
export default defineConfig(() => {
    //文件路径
    const resolvePath = path.resolve(__dirname, `./dist/build/`);
    //删除目录
    rmSync(resolvePath, {recursive: true, force: true});
    return {
        //修改build后的目录
        build: {
            outDir: resolvePath
        },
        plugins: [react()]
    }
})
