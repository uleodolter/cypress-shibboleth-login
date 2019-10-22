// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const _ = Cypress._

Cypress.Commands.add('shibbolethLogin', (overrides = {}) => {

    Cypress.log({
        name: 'shibbolethLogin'
    })

    const options = {
        idpUrl: 'https://idp.demo.net',
        providerId: 'https://sp.demo.net/shibboleth',
        username: 'musterm99',
        password: '********'
    }

    // allow us to override defaults with passed in overrides
    _.extend(options, overrides)

    return cy.visit(options.idpUrl + '/idp/profile/SAML2/Unsolicited/SSO?providerId=' + encodeURI(options.providerId))
      .get('input[name="j_username"]').type(options.username)
      .get('input[name="j_password"]').type(options.password)
      .get('form button').click()
      .getCookie('shib_idp_session').should('exist')
})
