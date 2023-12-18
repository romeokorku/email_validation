// const serverID = 'h7waeyr6'
// const emailDomain = 'anything@h7waeyr6.mailosaur.net'
// let emailAddress



describe('Retrieving email token using Mailosaur',()=>{
const serverID = 'h7waeyr6'
const serverDomain = 'anything@h7waeyr6.mailosaur.net'
const emailAddress =  'email-activation@' + serverDomain


    it('fill the signup page',()=>{
        cy.visit(Cypress.env('url'))

        //const randomString = new Date().getTime()
        //emailAddress = '$(randomString)$(emailDomain)'

        cy.get ('a[href="/signup"]').should('be.visible').click()
        cy.get('#firstName').should('be.visible').type('Angel')
        cy.get('#lastName').should('be.visible').type('Korkorkor')
        cy.get('input[type="email"]').should('be.visible').type('anything@h7waeyr6.mailosaur.net')
        cy.get('button[type="submit"]').click()


    })

    it('retrieve the link in the email and visit the link',()=>{
    
        cy.mailosaurGetMessage(serverID,
            {sentTo:serverDomain}).then(email=>{
            expect(email.subject).to.equal('Welcome to ACME Product');
            let confirmSignUpLink = email.html.links[0].href;
            cy.visit(confirmSignUpLink)
        })
    })
})