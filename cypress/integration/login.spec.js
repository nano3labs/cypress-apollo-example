describe('login', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('[name="email"]').type('michael@example.com')
    cy.contains('Log in').click()
  })

  it('should be able to login with any email', () => {
    expect(cy.contains('Logout'))
  })

  it ('should let me logout', () => {
    cy.contains('Logout').click()
    expect(cy.contains('Log in'))
  })
})
