describe('UI tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Check header buttons', () => {
    cy.get(".btn-primary").eq(0).contains("Home")
    cy.get(".btn-primary").eq(1).contains("Practice")
    cy.get(".btn-primary").eq(2).contains("Login")
    cy.get(".btn-primary").eq(3).contains("Signup")
  })

  it('Check pageTitle',() => {

    cy.get('h1')                       // Select the <h1> tag
      .should('be.visible')            
      .and('contain.text', 'Practice Page')
  })

   it('Check dropdown',() => {

    cy.get('#dropdown-class-example').select('Option3')
    
  })

   it('Check Alert',() => {

    //Enter name
    cy.get('#name').type("Roshan")

    //Click Alert button
    cy.get('#alertbtn').click()

    cy.on('window:alert', (text) => {
      // Assert the alert text
      expect(text).to.equal('Hello Roshan, share this practice page and share your knowledge')
    })

    
    
  })


})