describe('Criar Nova Loja', () => {
  const storeName = 'BOARICKY'
  const storeDescription = 'Descricao do rafael'
  const phone = '1111111111111'
  const storePhoto = '../test data/carrinho-compras.png'

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
      .type(phone)
      .should('have.value', phone)
  })
  it('Selecionar foto da nova loja', () => {
    cy.get('[type="file"]')
      .attachFile(storePhoto);
  })
  it('Selecionar cor primária da nova loja', () => {
    cy.get('[name="primaryColor"]')
      .invoke('val', '#fe0090')
      .trigger('change')
      .should('have.value', '#fe0090')
  })
  it('Selecionar cor secundária da nova loja', () => {
    cy.get('[name="secondaryColor"]')
      .invoke('val', '#ff9999')
      .trigger('change')
      .should('have.value', '#ff9999')
  })

  it('Subemeter formulário', () => {
    cy.get('button')
      .click()
  })

  it('Ir para Nova Loja', () => {
    cy.get('h1').contains(`${storeName}`).click()
    cy.location('pathname').should('eq', `/store/${storeName}/dashboard`)
  })
})

