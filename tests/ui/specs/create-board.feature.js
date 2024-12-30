import LoginPage from '../pageobjects/login.page'
// import { describe, it, beforeEach } from 'mocha'

describe('Create Board Feature', () => {
  beforeEach(async () => await LoginPage.open('login'))

  describe('Scenario: The user attempts to open the board creation panel', () => {
    describe('Given the Boards page is open in the browser', () => {
      describe('When the user clicks on the Create button', () => {
        it("Then a panel titled 'Create board' should open", async () => {})
      })
    })
  })

  describe('Scenario: The user attempts to create a new board', () => {
    describe('Given the Create board panel is open', () => {
      describe("When the user tries to create a board titled 'MyShinyNewBoard'", () => {
        it('Then a new board should be created with the entered title', async () => {})
      })
    })
  })
})
