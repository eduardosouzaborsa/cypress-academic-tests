/// <reference types="cypress" />

describe('Teste do Carrinho', () => {
    it('Adiciona um item no carrinho e valida se ele está lá', () => {
        //Acessa a página do produto
        cy.visit('https://www.amazon.com.br/L%C3%A2mpada-Positivo-Casa-Inteligente-Compat%C3%ADvel/dp/B082FTRR76/ref=zg_bs_c_home_sccl_2/132-6889956-5137849?pd_rd_w=SIdKh&content-id=amzn1.sym.b84c4b85-d0b6-44ab-b250-acbd7d0f923e&pf_rd_p=b84c4b85-d0b6-44ab-b250-acbd7d0f923e&pf_rd_r=G7C5KCXP7X03JV8R33SP&pd_rd_wg=2MWNB&pd_rd_r=672d78b7-46fc-4ca7-81f5-0a4f99db035f&pd_rd_i=B082FTRR76&psc=1');

        //Adiciona o produto ao carrinho
        cy.get('input[name="submit.add-to-cart"]').click();
        cy.get('#nav-cart-count-container').click();

        cy.get('span[class="a-truncate-full a-offscreen"]').should('exist'); //Valida se o item está no carrinho

        //Valida se o valor está correto
        cy.get('span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]').contains('42,74');
    });

    it('Valida se o valor zera ao excluir o produto', () => {
        //Acessa a página do produto
        cy.visit('https://www.amazon.com.br/L%C3%A2mpada-Positivo-Casa-Inteligente-Compat%C3%ADvel/dp/B082FTRR76/ref=zg_bs_c_home_sccl_2/132-6889956-5137849?pd_rd_w=SIdKh&content-id=amzn1.sym.b84c4b85-d0b6-44ab-b250-acbd7d0f923e&pf_rd_p=b84c4b85-d0b6-44ab-b250-acbd7d0f923e&pf_rd_r=G7C5KCXP7X03JV8R33SP&pd_rd_wg=2MWNB&pd_rd_r=672d78b7-46fc-4ca7-81f5-0a4f99db035f&pd_rd_i=B082FTRR76&psc=1');

        //Adiciona o produto ao carrinho
        cy.get('input[name="submit.add-to-cart"]').click();
        cy.get('#nav-cart-count-container').click();

        //Altera a quantidade para 0
        cy.get('#a-autoid-0-announce').click();
        cy.get('#quantity_0').click();

         //Valida se o valor está correto
         cy.get('span[class="a-size-medium a-color-base sc-price sc-white-space-nowrap"]').contains('0');
       
    });
  });