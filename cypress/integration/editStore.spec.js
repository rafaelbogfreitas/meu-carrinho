import {storeName, editStoreName, editStoreDescription, editStorePhone, editStorePhoto, editStorePrimaryColor, editStoreSecondaryColor} from '../test data/testData'


describe('Editar Loja', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
  })

  it('Preencher nome da nova loja', () => {
    cy.get('[placeholder="Minha loja"]')
      .clear()
      .type(editStoreName)
      .should('have.value', editStoreName)
  })
  it('Preencher descrição da nova loja', () => {
    cy.get('textarea')
      .clear()
      .type(editStoreDescription)
      .should('have.value', editStoreDescription)
  })
  it('Preencher telefone da nova loja', () => {
    cy.get('[placeholder="(xx) xxxxx-xxxx"]')
      .clear()
      .type(editStorePhone)
      .should('have.value', editStorePhone)
  })
  it('Selecionar foto da nova loja', () => {
    cy.get('[type="file"]')
      .attachFile(editStorePhoto);
  })
  it('Selecionar cor primária da nova loja', () => {
    cy.get('[name="primaryColor"]')
      .invoke('val', editStorePrimaryColor)
      .trigger('change')
      .should('have.value', editStorePrimaryColor)
  })
  it('Selecionar cor secundária da nova loja', () => {
    cy.get('[name="secondaryColor"]')
      .invoke('val', editStoreSecondaryColor)
      .trigger('change')
      .should('have.value', editStoreSecondaryColor)
  })

  it('Subemeter formulário', () => {
    cy.get('form > button')
      .click()
  })
})