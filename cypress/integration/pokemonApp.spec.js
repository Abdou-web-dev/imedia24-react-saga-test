describe("Pokemon App", () => {
  it("Visits the Pokemon App, selects a Pokemon, and opens the modal", () => {
    cy.visit("http://http://localhost:5173/");

    // Assuming I have a list of Pokemon and can find one by its name
    cy.contains("Bulbasaur").click();

    // Check if the modal is opened
    cy.get('[data-testid="poke-modal-test"]').should("be.visible");

    //  add more assertions here based on the application's behavior
  });
});
