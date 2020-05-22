import {email, password} from '../test data/testData'

describe('Login', () => {
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

  it('Realizar input de Email', () => {
    cy.get('#login-name')
      .type(email)
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    cy.get('#login-password')
      .type(password)
      .should('have.value', password)
  })

  it('Submeter Login', () => {
    cy.get('.btn--login')
      .click().wait(2000)
  })

  it('Redirecionar para Minhas Lojas', () => {
    cy.location('pathname').should('eq', '/minhaslojas')
  })
})

