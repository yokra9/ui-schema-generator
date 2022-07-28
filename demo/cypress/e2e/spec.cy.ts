describe('End-to-end tests', () => {

  before(() => {
    cy.fixture("config").then((data) => {
      this.target = data.target;
    })
  })

  it("ヘッダ", () => {
    cy.visit(this.target);

    cy.get('h1')
      .contains("Header");
  })

  it('firstName', () => {
    cy.visit(this.target);

    // 初期表示の確認
    cy.get(':nth-child(2) > .v-input__control')
      .contains("firstName");

    // 入力できることの確認
    cy.get('#input-6')
      .click()
      .type("My Name");

    // 入力後の表示の確認
    cy.get(':nth-child(2) > .v-input__control')
      .contains("firstName");
    cy.get(':nth-child(2) > .v-input__control')
      .contains("Your First Name");

    // フォーカスを外す
    cy.get('#input-6').blur();
    cy.wait(500);

    // フォーカスを外した後の表示の確認
    cy.get(':nth-child(2) > .v-input__control')
      .contains("firstName");
    cy.get(':nth-child(2) > .v-input__control')
      .contains("Your First Name").should('not.exist');
  })

  it('familyName', () => {
    cy.visit(this.target);

    // 初期表示の確認
    cy.get(':nth-child(3) > .v-input__control')
      .contains("familyName");

    // 入力できることの確認
    cy.get('#input-10')
      .click()
      .type("My Name");

    // 入力後の表示の確認
    cy.get(':nth-child(3) > .v-input__control')
      .contains("familyName");
    cy.get(':nth-child(3) > .v-input__control')
      .contains("Your Family Name");

    // フォーカスを外す
    cy.get('#input-10').blur();
    cy.wait(500);

    // フォーカスを外した後の表示の確認
    cy.get(':nth-child(3) > .v-input__control')
      .contains("familyName");
    cy.get(':nth-child(3) > .v-input__control')
      .contains("Your Family Name").should('not.exist');
  })

  it('address', () => {
    cy.visit(this.target);

    // 初期表示の確認
    cy.get(':nth-child(4) > .v-input__control')
      .contains("address");

    // 入力できることの確認
    cy.get('#input-14')
      .click()
      .type("My Address");

    // 入力後の表示の確認
    cy.get(':nth-child(4) > .v-input__control')
      .contains("address");
    cy.get(':nth-child(4) > .v-input__control')
      .contains("Your Address");

    // フォーカスを外す
    cy.get('#input-14').blur();
    cy.wait(500);

    // フォーカスを外した後の表示の確認
    cy.get(':nth-child(4) > .v-input__control')
      .contains("address");
    cy.get(':nth-child(4) > .v-input__control')
      .contains("Your Address").should('not.exist');
  })

  it('country', () => {
    cy.visit(this.target);

    // 初期表示の確認
    cy.get(':nth-child(5) > .v-input__control')
      .contains("country");

    // 入力できることの確認
    cy.get('#input-18')
      .click()
      .type("My Address");

    // 入力後の表示の確認
    cy.get(':nth-child(5) > .v-input__control')
      .contains("country");
    cy.get(':nth-child(5) > .v-input__control')
      .contains("Your Country");

    // フォーカスを外す
    cy.get('#input-18').blur();
    cy.wait(500);

    // フォーカスを外した後の表示の確認
    cy.get(':nth-child(5) > .v-input__control')
      .contains("country");
    cy.get(':nth-child(5) > .v-input__control')
      .contains("Your Country").should('not.exist');

    // エラー表示になっていることの確認
    cy.get(':nth-child(5) > .v-input__control')
      .parent()
      .should('have.class', 'error--text');

    // エラー表示にならないことの確認
    cy.get('#input-18')
      .click()
      .clear()
      .type("JP");
    cy.get(':nth-child(5) > .v-input__control')
      .parent()
      .should('not.have.class', 'error--text');
    cy.get('#input-18')
      .click()
      .clear()
      .type("SE");
    cy.get(':nth-child(5) > .v-input__control')
      .parent()
      .should('not.have.class', 'error--text');

    // セレクト
    cy.get('.v-select__selections')
      .contains("SE");
    cy.get('.v-select__selections')
      .click();
    cy.get('#list-item-40-0')
      .click();

    // ラジオボタン
    cy.get('.v-item--active')
      .contains("JP");
    cy.get(':nth-child(3) > .v-label')
      .click();
    cy.get('.v-item--active')
      .contains("SE");

  })

})