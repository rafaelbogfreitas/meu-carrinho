import {email, password, storeName, editStoreName, editStoreDescription, editStorePhone, editStorePhoto, editStorePrimaryColor, editStoreSecondaryColor} from '../test data/testData'


describe('Deletar todas as ordens', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
  })

  it('Fazer login', () => {
    cy.login(email, password)
  })

  it('Ir para loja', () => {
    cy.get(`[href="/store/${editStoreName}/dashboard"]`).first().click().wait(500)
    cy.location('pathname').should('eq', `/store/${editStoreName}/dashboard`)
  })

  it('Ir para editar loja', () => {
    cy.get(`[href="/store/${editStoreName}/paineldevendas"]`).click().wait(2500)
    cy.location('pathname').should('eq', `/store/${editStoreName}/paineldevendas`)
  })

  it('Deletar ordens', () => {
    cy.get('[class="deleteOrder"]').each((button) => button.click()).wait(500)
  })
})