const { defineConfig } = require("cypress");
const { configureVisualRegression } = require('cypress-visual-regression')


module.exports = defineConfig({
  component: {
    env: {
      visualRegressionType: 'regression'
    },
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require('./webpack.dev.js'),
    },
    screenshotsFolder: './cypress/snapshots',
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
    }
  }
});
