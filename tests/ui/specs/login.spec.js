import LoginPage from '../pageobjects/login.page'
import HeaderPage from '../pageobjects/header.page'
import { UIEnv } from '../configs/ui-env.conf'
import { browser } from '@wdio/globals'
//import { describe, it, beforeEach } from 'mocha'
import * as chai from 'chai'

describe('Login Feature', () => {
  beforeEach(async () => await LoginPage.open())

  describe('Scenario: The user attempts to log in with invalid username', () => {
    describe('Given the Login page is open in the browser', () => {
      describe('When the user enters an invalid username', () => {
        it("Then the 'Sign up to continue' message should appear", async () => {
          await LoginPage.enterUsername(UIEnv.secrets.INVALID_USERNAME)

          await browser.waitUntil(
            async () => {
              const initial = 'Log in to continue'
              const current = await LoginPage.messageAction.getText()

              return current != initial
            },
            {
              timeout: 5000,
              timeoutMsg: 'Expected message did not appear',
            }
          )

          const expected = 'Sign up to continue'
          const actual = await LoginPage.messageAction.getText()

          chai.assert.equal(actual, expected)
        })
      })
    })
  })

  describe('Scenario: The user attempts to log in with invalid password', () => {
    describe('Given the Login page is open in the browser', () => {
      describe('When the user enters an invalid username', () => {
        it('Then an error message should appear', async () => {
          await LoginPage.enterUsername(UIEnv.secrets.VALID_USERNAME)
          await LoginPage.enterPassword(UIEnv.secrets.INVALID_PASSWORD)

          chai.should()
          LoginPage.messageError.should.exist
        })
      })
    })
  })

  describe('Scenario: The user attempts to log in with valid credentials', () => {
    describe('Given the Login page is open in the browser', () => {
      describe('When the user enter valid credentials', () => {
        it('Then the user should be forwarded to the boards page', async () => {
          await LoginPage.enterUsername(UIEnv.secrets.VALID_USERNAME)
          await LoginPage.enterPassword(UIEnv.secrets.VALID_PASSWORD)

          chai.expect(HeaderPage.buttonCreateMenu).to.exist
        })
      })
    })
  })
})
