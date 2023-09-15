const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html?sap-ui-theme=sap_horizon",

  reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
    useCucumberStepReporter: true
}]],

  specs: [
    './features/*.feature'
  ],

  logLevel: 'warn',

  framework: "cucumber",
  cucumberOpts: {
    require: ['./step-definitions/*.js'],
    timeout: 300000
  },

  maxInstances: 3,

  services: [[QmateService], ["chromedriver"]],
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--output=/dev/null',
          '--window-size=1920,1080'
          // '--headless',
          // '--disable-gpu',
          // '--window-size=1920,1080',
          // '--no-sandbox',
          // '--disable-infobars',
          // '--disable-dev-shm-usage',
          // '--disable-notifications',
          // '--disable-extensions',
          // '--disable-popup-blocking',
          // '--disable-web-security',
          // '--allow-insecure-localhost',
          // '--disable-network-throttling',
          // '--disable-background-networking',
          // '--lang=en-US',
          // '--use-mock-keychain',
          // '--disable-background-timer-throttling',
          // '--disable-backgrounding-occluded-windows',
          // '--enable-logging',
          // '--disable-translate',
          // '--metrics-recording-only'
        ]
      },
    },
  ],

  // params: {
  //   import: {
  //     references: "./data/reference.json"
  //   },
  //   export: {
  //     references: "./data/reference.json"
  //   }
  // },

};