describe('cart', () => {
  before(() => {

  })

  it('should let me add a launch to the cart', () => {
    cy.login()
    cy.get('[data-test="tile"]').first().click()
    cy.contains('Add to Cart').click()
    cy.get('[data-test="cart"]').click()
    cy.contains('Book All').click()
    cy.pause()
  })
})
