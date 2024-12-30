import { $ } from '@wdio/globals'
import Page from './page'

class BoardPage extends Page {
  get titleBoard() {
    return $('h1[data-testid="board-name-display"]')
  }
}

export default new BoardPage()
