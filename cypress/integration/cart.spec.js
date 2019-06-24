describe('cart', () => {
  before(() => {
    cy.task('resetDatabase')
  })

  beforeEach(() => {
    cy.login()
    cy.reload()
  })

  it('should let me add a launch to the cart', () => {
    cy.get('[data-test="tile"]').first().click()
    cy.contains('Add to Cart').click()
    cy.get('[data-test="cart"]').click()
    cy.contains('Book All').click()
    expect(cy.contains('No items in your cart'))
  })
})
