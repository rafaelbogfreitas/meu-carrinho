import {email, password, storeName, storeDescription, storeDDDField, storeDDD, storePhone, storePhoto, storePrimaryColor, storeSecondaryColor} from '../test data/testData'

describe('Criar Nova Loja', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('Faz login', () => {
    cy.login(email, password)
  })
  
  it('Ir para Criar Nova Loja', () => {
    cy.get('[href="createStore"]').click().wait(2000)
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

  it('Preencher DDD do telefone da nova loja', () => {
    cy.get('select')
      .select(storeDDDField)
      .should('have.value', storeDDD)
  })

  it('Preencher telefone da nova loja', () => {
    cy.get('[name="phone"]')
      .type(storePhone)
      .should('have.value', storePhone)
  })

  it('Selecionar foto da nova loja', () => {
    cy.get('[type="file"]')
      .attachFile(storePhoto)
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
    cy.get('[class="btn btn--green"]')
      .click().wait(2000)
  })

  it('Redirecionar para Minhas Lojas', () => {
    cy.location('pathname').should('eq', `/minhaslojas`)
  })

  it('Ir para Nova Loja', () => {
    cy.get(`[href="/store/${storeName}/dashboard"]`).first().click().wait(2000)
    cy.location('pathname').should('eq', `/store/${storeName}/dashboard`)
  })
})

