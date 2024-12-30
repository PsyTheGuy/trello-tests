import LoginPage from '../pageobjects/login.page'
// import { describe, it, beforeEach } from 'mocha'

describe('Search Board Feature', () => {
  beforeEach(async () => await LoginPage.open('login'))

  describe('Scenario: The user attempts to search for an existing board', () => {
    describe('Given the Boards page is open in the browser', () => {
      describe("When the user enters 'MyShinyNewBoard' in the search bar", () => {
        it("Then a link to the 'MyShinyNewBoard' board should be visible", async () => {
          // const expected = 'MyShinyNewBoard'
        })
      })
    })
  })

  describe('Scenario: The user attempts to search for a non existing board', () => {
    describe('Given the Boards page is open in the browser', () => {
      describe("When the user enters 'NotAnExistingBoard' in the search bar", () => {
        it('Then an informative message should be visible', async () => {
          // const expected = "We couldn't find anything matching your search."
        })
      })
    })
  })
})
