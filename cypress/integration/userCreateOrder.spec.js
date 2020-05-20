import {email, password, storeName, editStoreName, editStoreDescription, editStorePhone, editStorePhoto, editStorePrimaryColor, editStoreSecondaryColor} from '../test data/testData'


describe('Criar ordem (cliente)', () => {
  it('Limpar cookies', () => {
    cy.clearCookies()
    cy.wait(200)
  })

  it('Ir para loja', () => {
    cy.visit(`/store/${editStoreName}/dashboard`)
  })

  it('Adicionar produtos', () => {
    for (let i = 0; i <= Math.floor(Math.random()*10); i++) {
      cy.get('[alt="cart icon"]').click({ multiple: true })
    }
  })

  it('Enviar ordem', () => {
    cy.get('a').contains('Enviar').click().wait(2500)
  })
})