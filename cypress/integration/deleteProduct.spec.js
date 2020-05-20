import {email, password, product3, editStoreName} from '../test data/testData'

describe('Deletar Produto', () => {
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
      .type(product3.name)
      .should('have.value', product3.name)
  })
  it('Preencher descrição do produto', () => {
    cy.get('[name="description"]')
      .type(product3.description)
      .should('have.value', product3.description)
  })
  it('Preencher preço do novo produto', () => {
    cy.get('[name="price"]')
      .type(product3.price)
      .should('have.value', product3.price)
  })
  it('Preencher quantidade do novo produto', () => {
    cy.get('[name="quantity"]')
      .type(product3.quantity)
      .should('have.value', product3.quantity)
  })
  it('Selecionar foto do novo produto', () => {
    cy.get('[type="file"]')
      .attachFile(product3.image);
  })

  it('Subemeter formulário', () => {
    cy.get('[class="btn btn--green"]')
      .click()
  })

  it('Ir para Novo Produto', () => {
    cy.get(`[alt="${product3.name}"]`).first().click().wait(2000)
    cy.location('pathname').should('contain', `/store/${editStoreName}/product/`)
  })

  it('Deletar Produto', () => {
    cy.get('[class="deleteButton"]').click().wait(2000)
    cy.location('pathname').should('contain', `/store/${editStoreName}/dashboard`)
  })

  it('Limpar cookies', () => {
    cy.clearCookies()
  })

})

