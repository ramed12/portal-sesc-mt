const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://sescmt-cms.gaotech.com.br',
      changeOrigin: true,
      secure: false
    })
  );
};
