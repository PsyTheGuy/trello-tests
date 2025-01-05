Feature: Search Board
  The user wants to search for boards.

  Scenario: The user attempts to search for an existing board
    Given the Boards page is open in the browser
    When the user enters 'MyShinyNewBoard' in the search bar
    Then a link to the 'MyShinyNewBoard' board should be visible

  Scenario: The user attempts to search for a non existing board
    Given the boards page is open in the browser
    When the user enters 'NotAnExistingBoard' in the search bar
    Then an informative message should be visible
