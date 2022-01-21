const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // 生产环境
    // app.use(
    //     '/api',
    //     createProxyMiddleware({
    //         target: '',
    //         changeOrigin: true
    //     })
    // )
    // 测试环境
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://10.5.4.18/api/admin-console',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
