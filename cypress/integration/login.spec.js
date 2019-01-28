describe('login', () => {
  it('should be able to login with any email', () => {
    cy.visit('http://localhost:3000')
    cy.get('[name="email"]').type('michael@example.com')
    cy.contains('Log in').click()
    expect(cy.contains('Space Explorer'))
  })
})
