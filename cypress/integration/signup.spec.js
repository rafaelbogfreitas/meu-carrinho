import {name, email, password} from '../test data/testData'

describe('Signup', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('visits the app', () => {
    cy.visit('/')
  })

  it('Realizar input de nome', () => {
    cy.get('#signup-name')
      .type(name)
      .should('have.value', name)
  })

  it('Realizar input de Email', () => {
    cy.get('#signup-email')
      .type(email)
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    cy.get('#signup-password')
    .type(password)
    .should('have.value', password)
  })
  
  it('Submeter signup', () => {
    cy.get('#signup-button')
      .click()
  })
})

