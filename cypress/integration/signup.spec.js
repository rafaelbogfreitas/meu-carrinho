describe('Signup', () => {
  it('Realizar input de nome', () => {
    const input = "Teste"
    cy.get('.signup_login__3LVzd > form > [name="name"]')
      .type(input)
      .should('have.value', input)
  })

  it('Realizar input de Email', () => {
    const input = "emailteste2@teste.com"
    cy.get('[name="email"]')
      .type(input)
      .should('have.value', input)
  })

  it('Realizar input de Senha', () => {
    const input = "senhadeteste"
    cy.get('.signup_login__3LVzd > form > [name="password"]')
      .type(input)
      .should('have.value', input)
  })

  it('Realizar input de Senha', () => {
    cy.get('.signup_login__3LVzd > form > button')
      .click()
  })

})

