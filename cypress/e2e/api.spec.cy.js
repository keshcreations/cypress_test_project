/// <reference types="Cypress" />

describe('Hipolabs University API', () => {
    it('API Response Code is 200', () => {
      cy.request('http://universities.hipolabs.com/search?country=United+States', {log: true}).then((response) => cy.log(response))
    })
  })