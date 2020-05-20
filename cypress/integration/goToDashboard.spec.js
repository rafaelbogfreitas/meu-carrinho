import {email, password, storeName, editStoreName, editStoreDescription, editStorePhone, editStorePhoto, editStorePrimaryColor, editStoreSecondaryColor} from '../test data/testData'


describe('Ir para painel de vendas', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('Fazer login', () => {
    cy.login(email, password)
  })

  it('Ir para loja', () => {
    cy.get(`[href="/store/${editStoreName}/dashboard"]`).first().click()
    cy.location('pathname').should('eq', `/store/${editStoreName}/dashboard`)
  })

  it('Ir para painel de vendas', () => {
    cy.get(`[href="/store/${editStoreName}/paineldevendas"]`).click()
    cy.location('pathname').should('eq', `/store/${editStoreName}/paineldevendas`)
  })
})