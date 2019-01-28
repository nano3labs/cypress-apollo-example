describe('login', () => {
  before(() => {
    cy.login('michael@example.com', 'password')
  })

  it('should be able to login with any email', () => {
    expect(cy.contains('Logout'))
  })

  it ('should let me logout', () => {
    cy.contains('Logout').click()
    expect(cy.contains('Log in'))
  })
})
