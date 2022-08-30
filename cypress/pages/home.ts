export class Home {
    navigateTo(){
        cy.visit('/')
        return this;
    }

    horsesTab(){
        cy.get('button').find('i[data-automation-id="horses"]').click()
    }

    openBetSlip(){
        return this;
    }
}