describe('Login', () => {
  const email = "emailteste2@teste.com"
  const password = "senhadeteste"
  
  it('visits the app', () => {
    cy.visit('/')
  })

  it('Realizar input de Email', () => {
    // const email = "emailteste2@teste.com"
    cy.get('.login_login__1rtGP > form > [name="name"]')
      .type(email)
      .should('have.value', email)
  })

  it('Realizar input de Senha', () => {
    // const password = "senhadeteste"
    cy.get('.login_login__1rtGP > form > [name="password"]')
      .type(password)
      .should('have.value', password)
  })

  it('Submeter Login', () => {
    cy.get('.login_login__1rtGP > form > button')
      .click()
  })

  it('Redirecionar para Minhas Lojas', () => {
    cy.location('pathname').should('eq', '/minhaslojas')
  })
})

