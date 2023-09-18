const QmateService = require("@sap_oss/wdio-qmate-service");
const QmateReporter = require("wdio-qmate-reporter").default;
const QmateReporterConfigHooksProcessor = require("wdio-qmate-reporter").ConfigHooksProcessor;
const outputDir = "./results";
const reportName = "report";
const uxInconsistenciesFolderName = "uxResults"; //???

exports.config = {

  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html?sap-ui-theme=sap_horizon",

  specs: [
    // "./spec/addRemoveFromCart.js",
    "./spec/createNewOrderCart.js"
  ],

  logLevel: 'warn',

  framework: "mocha",
  mochaOpts: {

    timeout: 60000, // 60 seconds
    bail: true,
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

  reporters: [
    [
        QmateReporter,
        {
            title: "Qmate Reporter",
            outputDir: outputDir,
            filename: reportName,
            storeAllScreenshots: true,
            displaySuiteRetries: true,
            displayStepRetries: true,
            displayPassedSuites: true,
            displaySkippedSuites: true,
            displayFailedSuites: true,
            statsMode: "nonEmpty",
            expandPassedSuites: false,
            expandSkippedSuites: false,
            expandFailedSuites: false,
            entriesPerPage: 10,
            sortByName: false,
            uxInconsistenciesFolderName //???
        }
    ]
  ],

  onPrepare: async (config, capabilities) => {
    try {
        const qmateReporter = config.reporters.find((entry) => entry[0] === QmateReporter);
        await QmateReporterConfigHooksProcessor.initOutputDir(qmateReporter[1].outputDir);
    }
    catch (error) {
        console.error(`Could not clear output dir. ${error}`);
    }
  },

  // beforeSession: async (config, capabilities, specs) => {
  //   const qmateReporter = config.reporters.find((entry) => entry[0] === QmateReporter);
  // },

  afterTest: async (test, context, { error, _result, _duration, _passed, _retries }) => {
    try {
        await QmateReporterConfigHooksProcessor.triggerBrowserLogsCollection();
    }
    catch (error) {
        console.error(`Could not collect browser logs. ${error}`);
    }
  },

  onComplete: async (exitCode, config, capabilities, results) => {
    try {
      await QmateReporterConfigHooksProcessor.writeSuitesToReport(outputDir, reportName, uxInconsistenciesFolderName); //???
    } catch (error) {
      console.error(`Could not collect browser logs. ${error}`);
    }
  }
};