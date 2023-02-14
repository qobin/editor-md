// vue.config.js
module.exports = {
    // 选项...
    publicPath: './',
    outputDir: 'editor-md',
    configureWebpack: {
        plugins: [
            // 配置jQuery
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery",
            }),
            // 开启gzip压缩
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css)$/,// 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false, // 不删除源文件
                minRatio: 0.8 // 压缩比
            })
        ],
    },
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/.md$/)
            .use('markdown-loader')
            .loader('markdown-loader')
            .loader('html-loader')
    }
}
