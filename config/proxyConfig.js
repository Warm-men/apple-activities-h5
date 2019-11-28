module.exports = {
  proxy: {
    '/dev/*': {
      target: 'https://dev.tengmoney.com',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true
    },
    '/test': {
      target: 'https://test.tengmoney.com',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true
    },
    '/www': {
      target: 'https://www.tengmoney.com',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true
    }
  }
}
