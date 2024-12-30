import { browser } from '@wdio/globals'

export default class Page {
  async open(path) {
    return await browser.url(`https://trello.com/${path}`)
  }
}
