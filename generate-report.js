var reporter = require();

var options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/test-artifacts',
    output: 'cypress/test-artifacts/html-reporter/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false
}

reporter.generate(options);