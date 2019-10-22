
describe('shibboleth login', () => {
  it('can login', () => {
    cy.shibbolethLogin({
        idpUrl: Cypress.env('idpUrl'),
        providerId: Cypress.env('providerId'),
        username: Cypress.env('username'),
        password: Cypress.env('password')
    })
  });
});
