exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://demo.testim.io/',
      show: true,
      windowSize: '1200*900'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/Login.feature',
    steps: ['./step_definitions/loginSteps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    },
    stepByStepReport:{
      enabled: true,
      screenshotForAllureReport: true,
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'FrameWorkPuppeteerBDD'
}