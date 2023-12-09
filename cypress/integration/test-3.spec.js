/// <reference types="cypress" />

describe('Teste de Venda', () => {
    it('Valida a tela de login é aberta ao tentar comprar sem logar', () => {
        //Acessa a página do produto
        cy.visit('https://www.amazon.com.br/L%C3%A2mpada-Positivo-Casa-Inteligente-Compat%C3%ADvel/dp/B082FTRR76/ref=zg_bs_c_home_sccl_2/132-6889956-5137849?pd_rd_w=SIdKh&content-id=amzn1.sym.b84c4b85-d0b6-44ab-b250-acbd7d0f923e&pf_rd_p=b84c4b85-d0b6-44ab-b250-acbd7d0f923e&pf_rd_r=G7C5KCXP7X03JV8R33SP&pd_rd_wg=2MWNB&pd_rd_r=672d78b7-46fc-4ca7-81f5-0a4f99db035f&pd_rd_i=B082FTRR76&psc=1');

        //Adiciona o produto ao carrinho
        cy.get('input[name="submit.add-to-cart"]').click();
        cy.get('#nav-cart-count-container').click();

        //Clica para finalizar a venda
        cy.get('input[name="proceedToRetailCheckout"]').click();

        //Valida se a tela para registrar-se apareceu
        cy.url().should('include', 'https://www.amazon.com.br/ap/signin');
    });
  });