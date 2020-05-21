import {email, password, storeName, editStoreName, editStoreDescription, editStorePhone, editStorePhoto, editStorePrimaryColor, editStoreSecondaryColor} from '../test data/testData'


describe('Deletar todas as ordens', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('Fazer login', () => {
    cy.login(email, password)
  })

  it('Ir para loja', () => {
    cy.get(`[href="/store/${editStoreName}/dashboard"]`).first().click().wait(2500)
    cy.location('pathname').should('eq', `/store/${editStoreName}/dashboard`).wait(2500)
  })

  it('Ir para editar loja', () => {
    cy.get(`[href="/store/${editStoreName}/paineldevendas"]`).click().wait(2500)
    cy.location('pathname').should('eq', `/store/${editStoreName}/paineldevendas`).wait(2500)
  })

  it('Deletar ordens', () => {
    cy.get('[class="btn-order btn-order--delete"]').each((button) => button.click())
  })
})