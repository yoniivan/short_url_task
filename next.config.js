module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
};

module.exports = {
  env: {
    MONGO_URI: "",
    REDIRECT_DOMAIN: "http://srt.il",
  }
}
