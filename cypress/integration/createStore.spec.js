describe('Criar Nova Loja', () => {
  const storeName = 'Loja teste cypress'
  const storeDescription = 'Descricao teste cypress'
  const phone = '99999999999'
  const storePhoto = '../test data/carrinho-compras.png'

  it('Ir para Criar Nova Loja', () => {
    cy.get('a')
      .click()
    cy.location('pathname').should('eq', '/createStore')
  })

  it('Preencher form de nova loja', () => {
    cy.get('[placeholder="Minha loja"]')
      .type(storeName)
      .should('have.value', storeName)

    cy.get('textarea')
      .type(storeDescription)
      .should('have.value', storeDescription)

    cy.get('[name="primaryColor"]')
      .invoke('val', '#fe0090')
      .trigger('change')

    cy.get('[name="secondaryColor"]')
      .invoke('val', '#ff9999')
      .trigger('change')
      
    cy.get('[placeholder="(xx) xxxxx-xxxx"]')
      .type(phone)
      .should('have.value', phone)

    cy.get('[type="file"]')
      .attachFile(storePhoto);
  })

  it('Subemeter formulário', () => {
    cy.get('button')
      .click()
  })
})

