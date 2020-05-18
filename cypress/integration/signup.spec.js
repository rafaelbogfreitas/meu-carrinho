import {name, email, password} from '../test data/testData'

describe('Signup', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
  })

  it('visits the app', () => {
    cy.visit('/')
  })

  it('Realizar input de nome', () => {
    cy.get('.signup_login__3LVzd > form > [name="name"]')
      .type(name)
      .should('have.value', name)
  })

  it('Realizar input de Email', () => {
    cy.get('[name="email"]')
      .type(email)
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    cy.get('.signup_login__3LVzd > form > [name="password"]')
    .type(password)
    .should('have.value', password)
  })
  
  it('Submeter signup', () => {
    cy.get('.signup_login__3LVzd > form > button')
      .click().wait(500)
  })
})

