const users = require ('../Data/usersSingUpData.json');

module.exports = {
   '@tags': ['login'],
   'Open page for test' : function (browser) {


const firstName = users.user1.firstName1;
const lastName = users.user1.lastName1;
const email = users.user1.email1;
const password = users.user1.password1;


     const login=browser.page.firstPage();
     const singin=browser.page.secondPage();

     login.navigate()//ucitavanje stranice
          .openregisterPage()
singin.addfirstName(firstName)
      .addLastName(lastName)
      .addEmail(email)
      .addPassword(password)
      .clickButton()
      .veryfyErrorMesageShown()
    browser.end();
      }
};
