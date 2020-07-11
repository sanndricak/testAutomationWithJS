const usersLog = require ('../Data/usersLogInData.json');
const product = require ('../Data/productSearchData.json');

module.exports = {
   '@tags': ['login'],
   'Open page for test' : function (browser) {


const emailuserName = usersLog.user1.email1;
const passworduserName = usersLog.user1.password1;
const product1 = product.products1.product1;

     const login=browser.page.firstPage();
      const shopNow=browser.page.thirdPage();

     login.navigate()//ucitavanje stranice

          .insertEmailuserName(emailuserName)
          .insertPassword(passworduserName)
          .cickOnSingInButton()
      shopNow.checkLogIn()
              .cickOnbuttonStart()
              .searchForProduct(product1)
              .checkIsSokFirst()
              
    browser.end();
      }
};
