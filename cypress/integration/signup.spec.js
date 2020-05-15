describe('Signup', () => {
  const name = "Teste"
  const email = "emailteste2@teste.com"
  const password = "senhadeteste"

  it('visits the app', () => {
    cy.visit('/')
  })

  it('Realizar input de nome', () => {
    cy.get('.signup_login__3LVzd > form > [name="name"]')
      .type(name)
      .should('have.value', name)
  })

  it('Realizar input de Email', () => {
    cy.get('[name="email"]')
      .type(email)
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    cy.get('.signup_login__3LVzd > form > [name="password"]')
    .type(password)
    .should('have.value', password)
  })
  
  it('Submeter signup', () => {
    cy.get('.signup_login__3LVzd > form > button')
      .click()
  })
})

