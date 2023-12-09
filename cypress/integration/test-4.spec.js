/// <reference types="cypress" />

describe('Teste de Pesquisa', () => {
    it('Valida se a pesquisa retorna o que foi buscado', () => {
        //Acessa a página do produto
        cy.visit('https://www.amazon.com.br');

        //Pesquisa por TV
        cy.get('input[name="field-keywords"]').type('smart tv led 32');
        cy.get('#nav-search-submit-button').click();

        //Clica no primeiro item que aparecer
        cy.get('div.s-product-image-container a.a-link-normal').first().click();

        //Valida se é uma televisão de fato
        cy.get('span[id="productTitle"]').contains('TV');
    });
  });