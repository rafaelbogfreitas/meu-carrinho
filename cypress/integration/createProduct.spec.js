import {email, password, product1, editStoreName} from '../test data/testData'

describe('Criar Novo Produto', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('Faz login', () => {
    cy.login(email, password)
  })

  it('Ir para loja', () => {
    cy.get(`[href="/store/${editStoreName}/dashboard"]`).first().click().wait(1000)
    cy.location('pathname').should('eq', `/store/${editStoreName}/dashboard`)
  })

  it('Ir para Novo Produto', () => {
    cy.get('[href="product/new"]').first().click().wait(1000)
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
    cy.get('[class="btn btn--green"]')
      .click()
  })
})

