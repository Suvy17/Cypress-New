export class registerPage{

    webLocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        subscribeCheckBox: '.col-sm-10 > :nth-child(1) > input',
        policyCheckbox: '[type="checkbox"]',
        continueBtn: '[type="submit"]'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    
    enterFirstName(FName){

        cy.get(this.webLocators.firstName).type(FName)
    }

    enterLastName(LName){

        cy.get(this.webLocators.lastName).type(LName)
    }

    enterEmail(email){

        cy.get(this.webLocators.email).type(email)
    }

    enterTelephone(phoneNo){

        cy.get(this.webLocators.telephone).type(phoneNo)
    }

    enterPassword(password){

        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.passwordConfirm).type(password)
    }

    selectRadioBtn(subscribeCheckBox){

        cy.get(this.webLocators.subscribeCheckBox).check().should('have.value', 1)
    }

    selectCheckbox(policyCheckbox){

        cy.get(this.webLocators.policyCheckbox).check()
    }

    clickBtn(continueBtn){

        cy.get(this.webLocators.continueBtn).click()
    }
}