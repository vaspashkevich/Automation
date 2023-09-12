const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html?sap-ui-theme=sap_horizon",

  after: function (capabilities, specs) {
    // Add the following line to keep the browser open after the test execution.
    browser.pause(50000); // Adjust the time (in milliseconds) as needed.

    // If you need to perform additional actions after the test execution, add them here.

    // Close the browser after the pause (optional).

  },

  reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
}]],

// afterStep: async function (step, scenario, { error, duration, passed }, context) {
//   if (error) {
//     await browser.takeScreenshot();
//   }
// },

  specs: [
    // "./spec/addRemoveFromCart.js",
    // "./spec/applicationTest.js",
    './features/addItem.feature'
  ],

  logLevel: 'warn',

  framework: "cucumber",
  cucumberOpts: {

    require: ['./step-definitions/*.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false

  },

  maxInstances: 10,


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