Feature: Login
  The user wants to authenticate to the website

  Scenario: The user attempts to log in with invalid username
    Given the Login page is open in the browser
    When the user enters an invalid username
    Then the 'Sign up to continue' message should appear

  Scenario: The user attempts to log in with invalid password
    Given the Login page is open in the browser
    When the user enters an invalid password
    Then an error message should appear

  Scenario: The user attempts to log in with valid credentials
    Given the Login page is open in the browser
    When the user enters valid credentials
    Then the user should be forwarded to the boards page
