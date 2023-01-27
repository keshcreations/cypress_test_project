describe('Website test', () => {
  it('Homepage contains name', () => {
    cy.visit('https://keshcreations.com')
    cy.get('span.black').should('have.text', 'KESH')
    cy.get('span.thin').should('have.text', 'Creations')
  })

  it('URL is correct', () => {
    cy.visit('https://keshcreations.com')
    cy.url().should('not.contain', 'temp')
  })
})


