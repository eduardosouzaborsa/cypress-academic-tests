/// <reference types="cypress" />

describe('Teste de Navegação', () => {
    it('Valida se os botões do menu levam aos lugares certos', () => {
        //Acessa a página do produto
        cy.visit('https://www.amazon.com.br/');

        //Valida se o botão 'Vendas na Amazon' está funcionando
        cy.get('a[data-csa-c-content-id="nav_cs_sell"]').click();
        cy.url().should('include', 'https://www.amazon.com.br/gp/browse.html?node=17877554011&ld=ASBRSOA_retail_sell_header_t1&ref_=nav_cs_sell');

        //Valida se o botão 'Mais Vendidos' está funcionando
        cy.get('a[data-csa-c-slot-id="nav_cs_1"]').click();
        cy.url().should('include', 'https://www.amazon.com.br/gp/bestsellers/?ref_=nav_cs_bestsellers');

        //Valida se o botão 'Ofertas do Dia' está funcionando
        cy.get('a[data-csa-c-slot-id="nav_cs_2"]').click();
        cy.url().should('include', 'https://www.amazon.com.br/deals?ref_=nav_cs_gb');

        //Valida se o botão 'Prime' está funcionando
        cy.get('a[data-csa-c-slot-id="nav-link-amazonprime"]').click();
        cy.url().should('include', 'https://www.amazon.com.br/prime?ref_=nav_cs_primelink_nonmember');

        //Valida se o botão 'Livros' está funcionando
        cy.get('a[data-csa-c-slot-id="nav_cs_4"]').click();
        cy.url().should('include', 'https://www.amazon.com.br/Livros/b/?ie=UTF8&node=6740748011&ref_=nav_cs_books');
    });
  });