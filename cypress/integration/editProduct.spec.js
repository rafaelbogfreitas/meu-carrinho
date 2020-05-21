import {email, password, product1, product2, editStoreName} from '../test data/testData'

describe('Editar Produto', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token', 'connect.sid')
    cy.wait(200)
  })

  it('Faz login', () => {
    cy.login(email, password)
  })

  it('Ir para loja', () => {
    cy.get(`[href="/store/${editStoreName}/dashboard"]`).first().click().wait(2000)
    cy.location('pathname').should('eq', `/store/${editStoreName}/dashboard`)
  })

  it('Ir para Novo Produto', () => {
    cy.get(`[alt="${product1.name}"]`)
      .first()
      .click()
      .wait(2000)
      
    cy.location('pathname').should('contain', `/store/${editStoreName}/product/`)
  })

  it('Ir para Editar Produto', () => {
    cy.get('[class="btn btn--green"]')
      .click()
      .wait(2000)
      
    cy.location('pathname').should('contain', `/store/${editStoreName}/product/`)
  })

  it('Preencher nome do produto', () => {
    cy.get('[name="name"]')
      .clear()
      .type(product2.name)
      .should('have.value', product2.name)
  })
  it('Preencher descrição do produto', () => {
    cy.get('[name="description"]')
      .clear()
      .type(product2.description)
      .should('have.value', product2.description)
  })
  it('Preencher preço do novo produto', () => {
    cy.get('[name="price"]')
      .clear()
      .type(product2.price)
      .should('have.value', product2.price)
  })
  it('Preencher quantidade do novo produto', () => {
    cy.get('[name="quantity"]')
      .clear()
      .type(product2.quantity)
      .should('have.value', product2.quantity)
  })
  it('Selecionar foto do novo produto', () => {
    cy.get('[type="file"]')
      .attachFile(product2.image)
  })

  it('Subemeter formulário', () => {
    cy.get('[class="btn btn--green"]')
      .click()
  })
})