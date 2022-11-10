describe('My First Test', () => {
  it('Visits the portfolio page', () => {
    cy.visit('/portfolio')
    cy.contains('JackPot')
    cy.get('tbody').find('tr').its('length').as('i');
    cy.get('#searchTxt').type('AB').type(`{enter}`);
    cy.get('tbody').find('tr').should('have.length',2);
    cy.get('#searchTxt').type('Cypress{selectAll}{backspace}')
    cy.get('#searchTxt').type('A').type(`{enter}`);
    cy.get('tbody').find('tr').should('have.length',8);
    cy.get('#buy').click();
    
  })

  it('Visits any other path i.e not available',()=>{
    cy.visit('/s');
    cy.contains('404 Not Found');
  })

  it('Visit trade page',()=>{
    cy.visit('/trade');
    cy.get('#trade-options').click();

    cy.get('#trade-ip').type('PAYPAL');
    cy.get('button').click();


  })
  it('visit portfolio should redirect to login screen',()=>{
    cy.visit('')
  })
})
