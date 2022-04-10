const withLess = require("next-with-less");
const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins(
  [
    [withLess({
      lessLoaderOptions: {},

    })]
  ],
  {
    i18n
  }



);