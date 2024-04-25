import fs, {cpSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'fs'
import path from 'path'

//获取项目路径
import {dirname} from 'path'
import {fileURLToPath} from 'url'

//获取项目路径
const __dirname = dirname(fileURLToPath(import.meta.url))

import archiver from 'archiver'

/*

//写入zip文件
function release(path,name){
    {
        name = `ctool_${name}`
        if (!existsSync(path)) {
            throw new Error(`release path "${path}" not found`)
        }
        const isFile = statSync(path).isFile()
        let releaseFile = "";
        if (isFile) {
            releaseFile = join(getReleasePath(), name)
            copyFileSync(path, releaseFile)
        } else {
            releaseFile = join(getReleasePath(), `${name}.zip`)
            await require('zip-a-folder').zip(path, releaseFile);
        }
        return releaseFile;
    }
}
*/


// 遍历浏览器配置文件，判断文件类型，生成不同浏览器配置文件
fs.readdirSync(__dirname).forEach(filename => {
    if (filename.indexOf(".manifest.json") !== -1) {
        // 浏览器名称
        const browserName = filename.substring(0, filename.indexOf('.'));
        // 配置文件名称
        const manifest = filename.substring(filename.indexOf('.') + 1, filename.length);
        //构建目录
        const dist = path.resolve(__dirname, `./dist`);
        // 构建目录
        const browserPath = path.resolve(__dirname, `${dist}/_${browserName}`);
        // 配置文件路径
        const manifestPath = `${browserPath}/${manifest}`;
        // 删除原有目录
        rmSync(browserPath, {recursive: true, force: true});
        // 创建目录
        mkdirSync(browserPath);
        // 创建文件
        const build = path.resolve(dist, `build/`);
        cpSync(build, `${browserPath}`, {recursive: true})
        // 配置文件
        cpSync(path.resolve(__dirname, `./${filename}`), manifestPath, {recursive: true})
        //获取 'package.json' 中的版本号
        const version = JSON.parse(readFileSync(path.resolve(__dirname, 'package.json')).toString())['version'] || "";
        // 写入版本号
        writeFileSync(manifestPath, readFileSync(manifestPath).toString().replace(new RegExp('##version##', 'g'), version))
        //打包zip
        createZip(browserPath, `${dist}/${browserName}.zip`);
    }
})


/**
 * 打包zip
 * @param sourceDir
 * @param targetZip
 */
function createZip(sourceDir, targetZip) {
    const output = fs.createWriteStream(targetZip);
    const archive = archiver('zip', {
        zlib: {level: 9} // 设置压缩级别
    });

    output.on('close', () => {
        console.log(`Zip file created: ${archive.pointer()} total bytes`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);

    archive.directory(sourceDir, false); // 将源文件夹添加到 zip 中

    archive.finalize();
}



