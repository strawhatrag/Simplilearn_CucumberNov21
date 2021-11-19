@LoginFeature
Feature: Login Feature

  @Regression @Sanity
  Scenario: Positive login Scenario
    Given user has navigated to the login page
    When user enters correct username and password
    And user clicks on the Login Button
    Then user should be navigated to the home page

  Scenario: Positive login Scenario with parameters
    Given user has navigated to the login page
    When user enters correct username "abc@xum.com" and password "Secret@12244"
    And user clicks on the Login Button
    Then user should be navigated to the home page

  Scenario Outline: Positive login Scenario with multiple users
    Given user has navigated to the login page
    When user enters correct username "<username>" and password "<password>"
    And user clicks on the Login Button
    Then user should be navigated to the home page

    Examples: 
      | username     | password     |
      | abc@yyum.com | Secret@12244 |
      | acd@ttum.com | Secret@13344 |

  Scenario Outline: Negative login Scenario with multiple users
    Given user has navigated to the login page
    When user enters correct username "<username>" and password "<password>"
    And user clicks on the Login Button
    Then user should be getting the error message "<Error>"

    Examples: 
      | username     | password     | Error                                              |
      | abc@yyum.com | Secret@12244 | The email or password you have entered is invalid. |
      | acd@ttum.com | Secret@13344 | The email or password you have entered is invalid. |
      
@DataTable
  Scenario: Positive login Scenario with Cucumber DataTable
   Given user has navigated to the login page
    When user enters correct credentials
      | Field    | Value      |
      | UserName | acf@hh.com |
      | Password | Goat@1451   |
    And user clicks on the Login Button
    Then user should be navigated to the home page
