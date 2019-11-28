module.exports = {
  proxy: {
    '/develop/*': {
      target: 'https://dev.tengmoney.com',
      secure: false,
      changeOrigin: true,
      pathRewirete: {
        '/develop': ''
      }
    },
    '/test': {
      target: 'https://test.tengmoney.com',
      secure: false,
      changeOrigin: true
    },
    '/www': {
      target: 'https://www.tengmoney.com',
      secure: false,
      changeOrigin: true
    },
    '/app/*': {
      target: 'http://www.ih5.cn',
      changeOrigin: true,
      secure: false
    }
  }
}
