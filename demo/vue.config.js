module.exports = {
  "transpileDependencies": [
    "vuetify", "ui-schema-generator"
  ],
  publicPath: process.env.GITHUB_PAGES === 'true'
    ? '/ui-schema-generator/dist/'
    : '/',
  configureWebpack: {
    devtool: 'hidden-source-map',
  }
}