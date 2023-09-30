describe('Smoke test', () => {
  it('makes sure welcome message comes up', () => {
    cy.visit('http://localhost:1234').contains('Hello world')
  })
})