Feature: Create Board
  The user wants to create new boards

  Scenario: The user attempts to open the board creation panel
    Given the Boards page is open in the browser
    When the user clicks on the Create board button
    Then a panel titled 'Create board' should open

  Scenario: The user attempts to create a new board
    Given the Create board panel is open
    When the user tries to create a board titled 'MyShinyNewBoard'
    Then a new board should be created with the entered title
