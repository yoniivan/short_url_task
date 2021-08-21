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
    MONGO_URI: "mongo",
    MONGO_IP: "27017",
    MONGO_PASSWORD: "pico1288",
    MONGO_USER: "yoniivan",
    REDIRECT_DOMAIN: "http://srt.il",
    WEB_DOMIAN: "http://localhost:3000",
  }
}
