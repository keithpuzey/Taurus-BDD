Feature: StressTest

Scenario: API Stress Test

	Given API Query http://dbankdemo.com/bank/

	And 10 users connect

	When Response time is less than 1ms

	Then Response is good


Scenario: API Stress Test large number of users

	Given API Query http://dbankdemo.com/bank/

	And 10 users connect

	When Response time is less than 3s

	Then Response is good

Scenario: API Stress Test with Reports on BlazeMeter

	Given API Query http://dbankdemo.com/bank/

	And 15 users connect

	And Report is generated from the Cloud

	When Response time is less than 3s

	Then Response is good