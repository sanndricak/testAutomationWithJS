module.exports = {
//url:'https://screenployee-allthingstalk.firebaseapp.com/',

url:function(){
return 'https://www.maxi.rs/login?lastViewedPage=/registration';
},

//definisanje polja koja testiramo na stranici
elements: {

  welcomeElement:{selector:'div.pageBody-header.with-bottom-border.screen-only h1.page-title.js-page-title'},
  buttonStart:{selector:'div.p-6.m-tb-6.bd.text-center a.btn.btn-primary'},
  searchField:{selector:'input[name="searchterm"]'},
  buttonsearch:{selector:'button.btn.btn-search'},
  firstOnList:{selector:'li.data-item:nth-child(1)'},
  buttonFirstOnList:{selector:'li.data-item div.product-layout div.ProductBasketAdder button.btn.btn-primary.js-update-qty-btn.js-basket-add-btn.fullnth-child(1)-holder.js-buy-by-'}

},

//definisanje funkcija uz pomoc kojih unosimo vrednosti u polja, kliknemo na dugme etc..
commands: [{

 checkLogIn: function()
 {
   return this.waitForElementPresent ('@welcomeElement', 6000, "We are log in.");

  },

    cickOnbuttonStart: function()
    {
      return this.waitForElementPresent ('@buttonStart', 6000)
                 .click ('@buttonStart');

     },
     searchForProduct: function(product1)
     {
       return this.waitForElementPresent ('@searchField', 6000)
                  .click ('@searchField')
                  .setValue('@searchField',product1)
                  .click('@buttonsearch');
      },

      checkIsSokFirst: function()
      {
        return this.waitForElementPresent ('@firstOnList', 6000)
              browser.assert.containsText('@firstOnList', "Sok")
              .waitForElementPresent ('@buttonFirstOnList');

       }
      

}]
};
