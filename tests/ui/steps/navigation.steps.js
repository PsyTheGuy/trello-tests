import { Given, Then, When } from '@wdio/cucumber-framework'
import HomePage from '../pageobjects/home.page'
import LoginPage from '../pageobjects/login.page'
import { expect } from 'chai'
// import { describe, it, beforeEach } from 'mocha'

Given('the Home page is open in the browser', async () => {
  await HomePage.open('home')
})

When('the user clicks on the Log in button', async () => {
  await HomePage.click(HomePage.elements.buttonLogin)
})

Then('the user should be forwarded to the login page', async () => {
  const expected = 'Log in to continue'
  const actual = await LoginPage.messageAction.getText()

  expect(actual).to.be.equal(expected)
})
