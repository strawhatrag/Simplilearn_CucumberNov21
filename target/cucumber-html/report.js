$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenario({
  "name": "Positive login Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive login Scenario with parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct username \"abc@xum.com\" and password \"Secret@12244\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Positive login Scenario with multiple users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters correct username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc@yyum.com",
        "Secret@12244"
      ]
    },
    {
      "cells": [
        "acd@ttum.com",
        "Secret@13344"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive login Scenario with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct username \"abc@yyum.com\" and password \"Secret@12244\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive login Scenario with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct username \"acd@ttum.com\" and password \"Secret@13344\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative login Scenario with multiple users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters correct username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be getting the error message \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Error"
      ]
    },
    {
      "cells": [
        "abc@yyum.com",
        "Secret@12244",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "acd@ttum.com",
        "Secret@13344",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negative login Scenario with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct username \"abc@yyum.com\" and password \"Secret@12244\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be getting the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_getting_the_error_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative login Scenario with multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct username \"acd@ttum.com\" and password \"Secret@13344\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be getting the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_getting_the_error_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});