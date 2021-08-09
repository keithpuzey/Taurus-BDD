$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('taurusbdd\TaurusBDD.feature');
formatter.feature({
  "line": 1,
  "name": "StressTest",
  "description": "",
  "id": "stresstest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "API Stress Test",
  "description": "",
  "id": "stresstest;api-stress-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "API Query http://dbankdemo.com/bank/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "10 users connect",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Response time is less than 1ms",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Response is good",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://dbankdemo.com/bank/",
      "offset": 10
    }
  ],
  "location": "StepDef.URL(String)"
});
formatter.result({
  "duration": 353751105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 0
    }
  ],
  "location": "StepDef.Concurrency(String)"
});
formatter.result({
  "duration": 68165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1ms",
      "offset": 27
    }
  ],
  "location": "StepDef.setresponse(String)"
});
formatter.result({
  "duration": 186057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 12
    }
  ],
  "location": "StepDef.responsestatus(String)"
});
formatter.result({
  "duration": 23287686284,
  "error_message": "java.lang.AssertionError: expected:\u003c0\u003e but was:\u003c3\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat taurusbdd.StepDef.responsestatus(StepDef.java:124)\r\n\tat ✽.Then Response is good(taurusbdd\\TaurusBDD.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "API Stress Test large number of users",
  "description": "",
  "id": "stresstest;api-stress-test-large-number-of-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "API Query http://dbankdemo.com/bank/",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "10 users connect",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Response time is less than 3s",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Response is good",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://dbankdemo.com/bank/",
      "offset": 10
    }
  ],
  "location": "StepDef.URL(String)"
});
formatter.result({
  "duration": 74311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 0
    }
  ],
  "location": "StepDef.Concurrency(String)"
});
formatter.result({
  "duration": 45257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3s",
      "offset": 27
    }
  ],
  "location": "StepDef.setresponse(String)"
});
formatter.result({
  "duration": 42743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 12
    }
  ],
  "location": "StepDef.responsestatus(String)"
});
formatter.result({
  "duration": 81147003042,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "API Stress Test with Reports on BlazeMeter",
  "description": "",
  "id": "stresstest;api-stress-test-with-reports-on-blazemeter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "API Query http://dbankdemo.com/bank/",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "15 users connect",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Report is generated from the Cloud",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Response time is less than 3s",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Response is good",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://dbankdemo.com/bank/",
      "offset": 10
    }
  ],
  "location": "StepDef.URL(String)"
});
formatter.result({
  "duration": 55872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 0
    }
  ],
  "location": "StepDef.Concurrency(String)"
});
formatter.result({
  "duration": 47771,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.cloudsetting()"
});
formatter.result({
  "duration": 25701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3s",
      "offset": 27
    }
  ],
  "location": "StepDef.setresponse(String)"
});
formatter.result({
  "duration": 26540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 12
    }
  ],
  "location": "StepDef.responsestatus(String)"
});
formatter.result({
  "duration": 84437741947,
  "status": "passed"
});
});