import {name, email, password} from '../test data/testData'

describe('Signup', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('visits the app', () => {
    cy.visit('/')
  })

  it('Clicar em Entrar', () => {
    cy.get('#entrar').click().wait(1000)
  })

  it('Ir para signup', () => {
    cy.get('#btn--goToRegister').click().wait(1000)
  })

  it('Realizar input de nome', () => {
    cy.get('#signup-name')
      .type(name, {force: true})
      .should('have.value', name)
  })

  it('Realizar input de Email', () => {
    cy.get('#signup-email')
      .type(email, {force: true})
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    cy.get('#signup-password')
    .type(password, {force: true})
    .should('have.value', password)
  })
  
  it('Submeter signup', () => {
    cy.get('.btn-signup')
      .click({force: true})
  })
})

