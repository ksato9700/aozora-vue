import { cyan } from "ansi-colors";

describe('Basic Test', () => {
    it('visits the site', () => {
        cy.visit('http://localhost:3000')

        cy.get('[data-cy=search_input]').type('unknown')
        cy.contains('search').click()
        cy.url().should('include', '/search?q=unknown')
        cy.contains('見つかりませんでした')
        cy.go('back')

        cy.get('[data-cy=search_input]').type('桜')
        cy.contains('search').click()
        cy.contains('桜林')


    /*
        cy.contains('menu').click()
        cy.contains('新着').click()
        cy.url().should('include', '/latest')
    */


    })
})