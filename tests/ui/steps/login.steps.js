import LoginPage from '../pageobjects/login.page'
import HeaderPage from '../pageobjects/header.page'
import { UIEnv } from '../configs/ui-env.conf'
import { browser } from '@wdio/globals'
import * as chai from 'chai'
import { Given, Then, When } from '@wdio/cucumber-framework'

Given('the Login page is open in the browser', async () => {
  await LoginPage.open()
})

When('the user enters an invalid username', async () => {
  await LoginPage.enterUsername(UIEnv.secrets.INVALID_USERNAME)
})

Then("the 'Sign up to continue' message should appear", async () => {
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

When('the user enters an invalid password', async () => {
  await LoginPage.enterUsername(UIEnv.secrets.VALID_USERNAME)
  await LoginPage.enterPassword(UIEnv.secrets.INVALID_PASSWORD)
})

Then('an error message should appear', async () => {
  chai.should()
  LoginPage.messageError.should.exist
})

When('the user enters valid credentials', async () => {
  await LoginPage.enterUsername(UIEnv.secrets.VALID_USERNAME)
  await LoginPage.enterPassword(UIEnv.secrets.VALID_PASSWORD)
})
Then('the user should be forwarded to the boards page', async () => {
  chai.expect(HeaderPage.buttonCreateMenu).to.exist
})
