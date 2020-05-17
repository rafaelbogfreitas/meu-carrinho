import {product1, editStoreName} from '../test data/testData'

describe('Criar Novo Produto', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
  })

  it('Ir para Novo Produto', () => {
    cy.get('[href="product/new"]')
      .click()
    cy.location('pathname').should('eq', `/store/${editStoreName}/product/new`)
  })

  it('Preencher nome do produto', () => {
    cy.get('[name="name"]')
      .type(product1.name)
      .should('have.value', product1.name)
  })
  it('Preencher descrição do produto', () => {
    cy.get('[name="description"]')
      .type(product1.description)
      .should('have.value', product1.description)
  })
  it('Preencher preço do novo produto', () => {
    cy.get('[name="price"]')
      .type(product1.price)
      .should('have.value', product1.price)
  })
  it('Preencher quantidade do novo produto', () => {
    cy.get('[name="quantity"]')
      .type(product1.quantity)
      .should('have.value', product1.quantity)
  })
  it('Selecionar foto do novo produto', () => {
    cy.get('[type="file"]')
      .attachFile(product1.image);
  })

  it('Subemeter formulário', () => {
    cy.get('button')
      .click()
  })

  // it('Redirecionar para Minhas Lojas', () => {
  //   cy.location('pathname').should('eq', `/minhaslojas`)
  // })

  // it('Ir para Nova Loja', () => {
  //   cy.get(`[href="/store/${storeName}/dashboard"]`).click()
  //   cy.location('pathname').should('eq', `/store/${storeName}/dashboard`)
  // })
})

