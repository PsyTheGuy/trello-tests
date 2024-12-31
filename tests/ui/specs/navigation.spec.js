import HomePage from '../pageobjects/home.page'
import LoginPage from '../pageobjects/login.page'
import { expect } from 'chai'
// import { describe, it, beforeEach } from 'mocha'

describe('Navigation Feature', () => {
  describe('Scenario: Login menu item navigates the user to the login page', () => {
    beforeEach(async () => await HomePage.open('home'))

    describe('Given the Home page is open in the browser', () => {
      describe('When the user clicks on the Log in button', () => {
        it('Then the user should be forwarded to the login page', async () => {
          await HomePage.click(HomePage.elements.buttonLogin)

          const expected = 'Log in to continue'
          const actual = await LoginPage.messageAction.getText()

          expect(actual).to.be.equal(expected)
        })
      })
    })
  })
})
