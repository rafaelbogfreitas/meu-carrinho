import {storeName, storeDescription, storePhone, storePhoto, storePrimaryColor, storeSecondaryColor} from '../test data/testData'

// export const randStoreName = storeName

describe('Criar Nova Loja', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
  })

  it('Ir para Criar Nova Loja', () => {
    cy.get('[href="createStore"]')
      .click()
    cy.location('pathname').should('eq', '/createStore')
  })

  it('Preencher nome da nova loja', () => {
    cy.get('[placeholder="Minha loja"]')
      .type(storeName)
      .should('have.value', storeName)
  })
  it('Preencher descrição da nova loja', () => {
    cy.get('textarea')
      .type(storeDescription)
      .should('have.value', storeDescription)
  })
  it('Preencher telefone da nova loja', () => {
    cy.get('[placeholder="(xx) xxxxx-xxxx"]')
      .type(storePhone)
      .should('have.value', storePhone)
  })
  it('Selecionar foto da nova loja', () => {
    cy.get('[type="file"]')
      .attachFile(storePhoto);
  })
  it('Selecionar cor primária da nova loja', () => {
    cy.get('[name="primaryColor"]')
      .invoke('val', storePrimaryColor)
      .trigger('change')
      .should('have.value', storePrimaryColor)
  })
  it('Selecionar cor secundária da nova loja', () => {
    cy.get('[name="secondaryColor"]')
      .invoke('val', storeSecondaryColor)
      .trigger('change')
      .should('have.value', storeSecondaryColor)
  })

  it('Subemeter formulário', () => {
    cy.get('button')
      .click()
  })

  it('Redirecionar para Minhas Lojas', () => {
    cy.location('pathname').should('eq', `/minhaslojas`)
  })

  it('Ir para Nova Loja', () => {
    cy.get(`[href="/store/${storeName}/dashboard"]`).click()
    cy.location('pathname').should('eq', `/store/${storeName}/dashboard`)
  })

  it('Ir para editar loja', () => {
    cy.get(`[href="/editStore/${storeName}"]`)
      .click()
      .then(() => cy.location('pathname').should('eq', `/editStore/${storeName}`))
  })
})

