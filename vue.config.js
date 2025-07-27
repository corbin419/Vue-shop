// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/Vue-shop/' // 注意要換成你的 repository 名稱
      : '/',
};
