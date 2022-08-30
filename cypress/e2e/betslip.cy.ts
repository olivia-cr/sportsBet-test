import { BetSlip } from '../pages/betSlip';
import { Home } from '../pages/home'
import { RacingHome } from '../pages/racingHome';

describe('horse racing pre login bet', () => {
  const homePage = new Home();
  const racingHomePage = new RacingHome();
  const betSlipPage = new BetSlip();

  before(() => {
    homePage.navigateTo();
  })
  it('can add bets to the betslip', () => {
    homePage.horsesTab();

    racingHomePage.selectNextToJump();
    racingHomePage.selectBet();

    betSlipPage.placeBet();

    cy.get('i[data-automation-id="closeIsolated"]').click()

    //could move the get command into a PO, but prefer to see my assertions clearly in the test.
    cy.get('span[data-automation-id="header-bet-count"]').should('have.text', '1')

    racingHomePage.selectBet(1);

    cy.get('span[data-automation-id="header-bet-count"]').should('have.text', '2')

  })
})