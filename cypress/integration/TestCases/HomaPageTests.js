import HomePage from '../PageObjects/HomePage'

describe('Shoping Cart Add,Remove,Delete', function () {
    const homePage = new HomePage   // Create object of the HomePage page objects class

    before(() => {
        cy.visit("http://localhost:3000/");    // Load the URL
    })

    beforeEach(() => {
        cy.get('.btn-success > .fa').click()    // Refreshing the cart
    })

    // Verify that the Items count is increasing when adding Items
    it('Verify that Items count is increasing when adding items', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.getFirstItemCount().should('have.text', 1) // Verify that the Item count is increased
        homePage.addSecondItem().click() // Adding second Item
        homePage.getItemsCount().should('have.text', 2) // Verify that the Items count is increased
    })

    // Verify that the Items count is not increasing when adding the same Item
    it('Verify that Items count is not increasing when adding the same item', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.getItemsCount().should('have.text', 1) // Verify that the Item count is increased
        homePage.addFirstItem().click() // Adding First Item again 
        homePage.getItemsCount().should('have.text', 1) // Verify that the Item count is not increased
    })

    // Verify that the Items count is set to 0 when click on the Refresh button
    it('Verify that the Refresh set the Items count to Zero', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.addFirstItem().click() // Adding First Item again 
        homePage.addSecondItem().click() // Adding second Item
        homePage.getRefresh().click() // Refreshing the cart
        homePage.getItemsCount().should('have.text', 0) // Verify that the Item count is zero 
    })

    // Verify that the relevent item count is increasing when adding
    it('Verify that the relevent item count is increasing when adding ', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.addFirstItem().click() // Adding First Item second time
        homePage.addFirstItem().click() // Adding First Item third time
        homePage.getFirstItemCount().should('have.text', 3) // Verify that the Item count is 3
    })

    // Verify that the relevent item count is decreasing when removing item
    it('Verify that the relevent item count is decreasing when click on minus button ', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.addFirstItem().click() // Adding First Item second time
        homePage.addFirstItem().click() // Adding First Item third time
        homePage.getFirstItemCount().should('have.text', 3) // Verify that the Item count is 3
        homePage.reduseFirstItem().click()  // Redusing number of item by one
        homePage.getFirstItemCount().should('have.text', 2) // Verify that the Item count is 2
    })

    // Verify that the Items count is redusing when set the item count to zero for an item
    it('Verify the items count when set the item counts to zero ', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.getFirstItemCount().should('have.text', 1) // Verify that the Item count is 1
        homePage.getItemsCount().should('have.text', 1) // Verify that the Items count is 1
        homePage.reduseFirstItem().click() // Redusing number of item by one
        homePage.getFirstItemCount().should('have.text', 'Zero') // Verify that the Item count is 0
        homePage.getItemsCount().should('have.text', 0) // Verify that the Items count is 0
    })

    // Verify that the Items count is redusing when delete an item
    it('Verify that the Items count is redusing when delete an item ', function () {
        homePage.addFirstItem().click() // Adding First Item
        homePage.getFirstItemCount().should('have.text', 1) // Verify that the Item count is 1
        homePage.getItemsCount().should('have.text', 1) // Verify that the Items count is 1
        homePage.deleteFirstItem().click() // Delete the first item
        homePage.getItemsCount().should('have.text', 0) // Verify that the Items count is 0
    })
}
)