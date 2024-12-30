import { $ } from '@wdio/globals'
import Page from './page'

class HomePage extends Page {
  elements = {
    buttonLogin: 'buttonLogin',
  }

  get buttonLogin() {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
  }

  async click(element) {
    switch (element) {
      case 'buttonLogin':
        await this.buttonLogin.click()
        break
      default:
        console.error(`${element} is not clickable`)
        break
    }
  }
}

export default new HomePage()
