import {email, password} from '../test data/testData'

describe('Login', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
  })
  
  it('visits the app', () => {
    cy.visit('/')
  })

  it('Realizar input de Email', () => {
    cy.get('.login_login__1rtGP > form > [name="name"]')
      .type(email)
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    cy.get('.login_login__1rtGP > form > [name="password"]')
      .type(password)
      .should('have.value', password)
  })

  it('Submeter Login', () => {
    cy.get('.login_login__1rtGP > form > button')
      .click().wait(500)
  })

  it('Redirecionar para Minhas Lojas', () => {
    cy.location('pathname').should('eq', '/minhaslojas')
  })
})

