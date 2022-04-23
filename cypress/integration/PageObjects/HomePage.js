class HomePage {
    addFirstItem() {
       return cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
    }

    reduseFirstItem() {
        return cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info > .fa')
    }

    getFirstItemCount() {
        return cy.get(':nth-child(2) > .row > :nth-child(1) > .badge')
    }

    addSecondItem() {
        return cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
    }

    getItemsCount() {
        return  cy.get('.navbar-brand > .badge')
    }

    getRefresh() {
        return cy.get('.btn-success > .fa')
    }

    deleteFirstItem() {
        return cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-danger')
    }
}

export default HomePage