
describe('addign a restautant', () => {
  it('displays a restaurant in the list', () => {
    const restNamem = 'Sushi Place'
    
    cy.visit('http://localhost:1234');

    cy.get('[data-test="addRestaurantButton"]').click()

    cy.get('[data-test="newRestaurantName"]').type(restNamem)

    cy.get('[data-test="saveNewRestaurantButton"]').click()

    cy.contains(restNamem)
  })
})