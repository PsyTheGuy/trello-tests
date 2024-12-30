import { $ } from '@wdio/globals'
import Page from './page'

class HeaderPage extends Page {
  elements = {
    buttonCreateMenu: 'buttonCreateMenu',
    buttonCreateBoard: 'buttonCreateBoard',
  }

  get buttonCreateMenu() {
    return $('button[data-testid="header-create-menu-button"]')
  }

  get buttonCreateBoard() {
    return $('button[data-testid="header-create-board-button"]')
  }

  get popoverCreateBoard() {
    return $('section[data-testid="header-create-menu-popover"]')
  }

  get inputBoardTitle() {
    return $('input[data-testid="create-board-title-input"]')
  }

  get buttonCreateBoardSubmit() {
    return $('button[data-testid="create-board-submit-button"]')
  }

  get inputSearch() {
    return $('input[data-test-id="search-dialog-input"]')
  }

  async click(element) {
    switch (element) {
      case 'buttonCreateMenu':
        await this.buttonCreateMenu.click()
        break
      case 'buttonCreateBoard':
        await this.buttonCreateBoard.click()
        break
      default:
        console.error(`${element} is not clickable`)
        break
    }
  }
}

export default new HeaderPage()
