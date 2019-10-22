# Cypress Shibboleth Login

This integraten has been tested successfully against Shibboleth IdP 3.2.0.

## Setup and run

```
git clone https://github.com/uleodolter/cypress-shibboleth-login
cd cypress-shibboleth-login
cat > cypress.env.json <<EOF
{
   "idpUrl": "<shibboleth identity provider base url>",
   "providerId": "<saml service provider entityID>",
   "username": "<test username>",
   "password": "<test passowrd>"
}
EOF
npx cypress open
```


