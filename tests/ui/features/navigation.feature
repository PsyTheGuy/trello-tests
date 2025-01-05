Feature: Navigation
  The user wants to navigate between pages

  Scenario: The user attempts to navigate to the login page
    Given the Home page is open in the browser
    When the user clicks on the Log in button
    Then the user should be forwarded to the login page
