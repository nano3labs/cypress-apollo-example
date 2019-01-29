describe('cart', () => {
  before(() => {
    cy.login()
    cy.reload()
  })

  // TODO: flakey because server needs to be restarted to load new state of sqlite database
  beforeEach(() => {
    cy.exec('rm ./server/store.sqlite')
    cy.exec('cp ./server/seed-store.sqlite ./server/store.sqlite')
  })

  it('should let me add a launch to the cart', () => {
    cy.get('[data-test="tile"]').first().click()
    cy.contains('Add to Cart').click()
    cy.get('[data-test="cart"]').click()
    cy.contains('Book All').click()
    expect(cy.contains('No items in your cart'))
  })
})
