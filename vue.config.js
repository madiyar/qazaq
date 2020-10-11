module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qazaq/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Qazaq Grammar";
        return args;
      })
  }
}