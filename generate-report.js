var reporter = require();

var options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/test-artifacts',
    output: 'cypress/test-artifacts/html-reporter/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
       "App Version":"0.3.2",
       "Test Environment": "STAGING",
       "Browser": "Chrome  54.0.2840.98",
       "Platform": "Windows 10",
       "Parallel": "Scenarios",
       "Executed": "Remote"
    }
};

reporter.generate(options);