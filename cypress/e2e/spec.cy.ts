describe('Adding a task', () => {
  // A test to check the add task works well  
  it('passes', () => {
    cy.visit('http://localhost:3001')
    cy.get('#input-box').type('first note');
    // Verify that the input value matches the typed text
    cy.get('#input-box').should('have.value', 'first note');
    cy.get('#go-button').click();
    cy.get(".todosSingle").contains('first note').should('be.visible');
  })
})

describe('Striking a task', () => {
  // A test that checks when the done button is clicked it strikes the text
  it('passes', () => {
    cy.visit('http://localhost:3001')
    cy.get('#input-box').type('first note');
    // Verify that it will be striked
    cy.get('#input-box').should('have.value', 'first note');
    cy.get('#go-button').click();
    cy.get('#done0').click();
    cy.get('.todosSingle--text').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
  })
})

describe('Deleting a note', () => {
  // A test that checks if deleting a note works as expected
  it('passes', () => {
    cy.visit('http://localhost:3001')
    cy.get('#input-box').type('first note');
    // Verify that the note will be deleted
    cy.get('#input-box').should('have.value', 'first note');
    cy.get('#go-button').click();

    cy.get('.todos')
      .children('.todosSingle')
      .its('length')
      .then((initialLength) => {
        // Simulate the delete action
        cy.get('#delete0').click();
        // Verify that the item is deleted
        cy.get('.todos')
          .children('.todosSingle')
          .should('have.length', initialLength - 1);
      });
  })
})

describe('Adding empty task', () => {
  // A test that checks if adding an empty task works as expected
  it('passes', () => {
    cy.visit('http://localhost:3001')
    
    // Simulate empty insertion
    cy.get('#go-button').click();
    cy.get('.todos')
      .its('length')
      .then((initialLength) => {
        cy.get('.todos')
          .should('have.length', initialLength);
      });
  })
})