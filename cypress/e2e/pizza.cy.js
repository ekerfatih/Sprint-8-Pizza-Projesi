describe('task4tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        cy.get('.order').first().click()
    })

    it('inputa bir metin giren test', () => {
        cy.get('[name="orderNote"]').type('test');

    })
    it('birden fazla malzeme seçilebilen bir test', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();
        cy.get('label[for="Soğan"]').first().click();
        cy.get('label[for="Ananas"]').first().click();

    })
    it('formu gönderen bir test', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();
        cy.get('label[for="Soğan"]').first().click();
        cy.get('label[for="Ananas"]').first().click();

        cy.get('input[name="pizzaSize"][value="Küçük Boy"]').check({force: true});
        cy.get('select[name="dough"]').select('Normal');

        cy.get('.order-button').click()
        cy.contains('SİPARİŞİNİZ ALINDI!').should('be.visible');
    })

    it('Boyut Seçilmediğinde hata mesajı gösterilmesi', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();
        cy.get('label[for="Soğan"]').first().click();
        cy.get('label[for="Ananas"]').first().click();

        cy.get('select[name="dough"]').select('Normal');
        cy.get('.order-button').click()
        cy.get('.error').contains('Lütfen Boyut Seçimi yapınız').should('be.visible');
    })

    it('Hamur Seçilmediğinde hata mesajı gösterilmesi', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();
        cy.get('label[for="Soğan"]').first().click();
        cy.get('label[for="Ananas"]').first().click();

        cy.get('input[name="pizzaSize"][value="Küçük Boy"]').check({force: true});

        cy.get('.order-button').click()
        cy.get('.error').contains('Lütfen Kalınlık Seçimi yapınız').should('be.visible');
    })

    it('4ten az ürün seçildiğinde hata mesajı gösterilmesi', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();

        cy.get('input[name="pizzaSize"][value="Küçük Boy"]').check({force: true});
        cy.get('select[name="dough"]').select('Normal');

        cy.get('.order-button').click()
        cy.get('.error').contains('4 üründen fazla seçmelisiniz').should('be.visible');
    })
    it('10 üründen fazla seçilememesi', () => {
        cy.get('label.checkLabel').each(($el) => {
            cy.wrap($el).click();
        });
        cy.get('input[name="pizzaSize"][value="Küçük Boy"]').check({force: true});
        cy.get('select[name="dough"]').select('Normal');
        cy.get('input[type="checkbox"][name="ingredients"]:checked').should('have.length', 10);
    })

    it('Axios sorgusu gönderilmesi', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();
        cy.get('label[for="Soğan"]').first().click();
        cy.get('label[for="Ananas"]').first().click();

        cy.get('input[name="pizzaSize"][value="Küçük Boy"]').check({force: true});
        cy.get('select[name="dough"]').select('Normal');

        cy.get('.order-button').click();
        cy.get('p').contains('Sipariş Zamanı').find('span').should('not.be.empty');
    })

    it('Onay Sayfasında Footer bölümü gösterilmesi', () => {
        cy.get('label[for="Mısır"]').first().click();
        cy.get('label[for="Kabak"]').first().click();
        cy.get('label[for="Soğan"]').first().click();
        cy.get('label[for="Ananas"]').first().click();

        cy.get('input[name="pizzaSize"][value="Küçük Boy"]').check({force: true});
        cy.get('select[name="dough"]').select('Normal');

        cy.get('.order-button').click();
        cy.get('#address-content > :nth-child(1) > span').should('be.visible');
    })

})