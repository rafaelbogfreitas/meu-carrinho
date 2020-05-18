import {email, password, storeName, editStoreName, editStoreDescription, editStorePhone, editStorePhoto, editStorePrimaryColor, editStoreSecondaryColor} from '../test data/testData'


describe('Criar ordem (cliente)', () => {
  it('Limpar cookies', () => {
    cy.clearCookies()
  })

  it('Ir para loja', () => {
    cy.visit(`/store/${editStoreName}/dashboard`)
  })

  it('Adicionar produtos', () => {
    for (let i = 0; i <= Math.floor(Math.random()*10); i++) {
      cy.get('.product > button').click({ multiple: true })
    }
  })

  it('Enviar ordem', () => {
    cy.get('button').contains('ENVIAR').click().wait(500)
  })
})