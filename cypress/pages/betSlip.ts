export class BetSlip {
    //login functionality goes here.

    placeBet() {
        cy.get('span[data-automation-id="betslip-footer-right-button-label"]').click();
    }
}