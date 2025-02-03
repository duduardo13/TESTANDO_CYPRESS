describe('Login', () => {
    it('Realizar login com sucesso', () => {
        //ARRANGE
            cy.visit('https://www.saucedemo.com/')


        //ACT
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
        
        //ASSERT
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Realizar login informando credenciais incorretas', () => {
       
        //ARRANGE
            cy.visit('https://www.saucedemo.com/')
           
           
        //ACT   
            cy.get('[data-test="username"]').type('user.ivalid')
            cy.get('[data-test="password"]').type('senha')
            cy.get('[data-test="login-button"]').click()

        
        //ASSERT
            cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
            cy.url().should('eq', 'https://www.saucedemo.com/')


    })
})