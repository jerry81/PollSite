
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    outputPath:'www', // build到www目录，cordova会被这个目录拷贝到项目工程
    history: 'hash',
    base: './',
    publicPath:'./', // cordova使用文件协议访问
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: true,
        dva: {
          immer: true
        },
        dynamicImport: false,
        title: 'umiDvaHybrid',
        dll: false,
        
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      }],
    ],
  }
  