import { Home } from "./home";

export class RacingHome extends Home {
    navigateTo(){
        cy.visit('/racing')
        return this;
    }

    selectNextToJump(){
        cy.get('div[data-automation-id="group-1-carousel-1-body-container-cell-1"]').click()
        return this;
    }

    selectBet(number: number = 0){
        cy.get('div[data-automation-id="racecard-body"]')
        .find('span[data-automation-id="price-text"]').eq(number)
        .click()
        return this;
    }


}