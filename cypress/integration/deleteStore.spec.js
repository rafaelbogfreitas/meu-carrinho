import {email, password, deleteStoreName, deleteStoreDescription, deleteStoreDDDField, deleteStoreDDD, deleteStorePhone, deleteStorePhoto, deleteStorePrimaryColor, deleteStoreSecondaryColor} from '../test data/testData'

describe('Deletar Loja', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('Fazer login', () => {
    cy.login(email, password)
  })
  
  it('Ir para Criar Nova Loja', () => {
    cy.get('[href="createStore"]').click().wait(2000)
    cy.location('pathname').should('eq', '/createStore')
  })

  it('Preencher nome da nova loja', () => {
    cy.get('[placeholder="Minha loja"]')
      .type(deleteStoreName)
      .should('have.value', deleteStoreName)
  })

  it('Preencher descrição da nova loja', () => {
    cy.get('textarea')
      .type(deleteStoreDescription)
      .should('have.value', deleteStoreDescription)
  })

  it('Preencher DDD do telefone da nova loja', () => {
    cy.get('select')
      .select(deleteStoreDDDField)
      .should('have.value', deleteStoreDDD)
  })

  it('Preencher telefone da nova loja', () => {
    cy.get('[name="phone"]')
      .type(deleteStorePhone)
      .should('have.value', deleteStorePhone)
  })

  it('Selecionar foto da nova loja', () => {
    cy.get('[type="file"]')
      .attachFile(deleteStorePhoto)
  })

  it('Selecionar cor primária da nova loja', () => {
    cy.get('[name="primaryColor"]')
      .invoke('val', deleteStorePrimaryColor)
      .trigger('change')
      .should('have.value', deleteStorePrimaryColor)
  })

  it('Selecionar cor secundária da nova loja', () => {
    cy.get('[name="secondaryColor"]')
      .invoke('val', deleteStoreSecondaryColor)
      .trigger('change')
      .should('have.value', deleteStoreSecondaryColor)
  })

  it('Subemeter formulário', () => {
    cy.get('[class="btn btn--green"]')
      .click().wait(2000)
  })

  it('Redirecionar para Minhas Lojas', () => {
    cy.location('pathname').should('eq', `/minhaslojas`)
  })

  it('Ir para Nova Loja', () => {
    cy.get(`[href="/store/${deleteStoreName}/dashboard"]`).first().click().wait(2000)
    cy.location('pathname').should('eq', `/store/${deleteStoreName}/dashboard`)
  })

  it('Ir para Editar Loja', () => {
    cy.get(`[href="/editStore/${deleteStoreName}"]`).first().click().wait(2000)
    cy.location('pathname').should('eq', `/editStore/${deleteStoreName}`)
  })

  it('Deletar loja', () => {
    cy.get('[class="btn btn--red"]').first().click().wait(2000)
    cy.location('pathname').should('eq', `/minhaslojas`)
  })
})

