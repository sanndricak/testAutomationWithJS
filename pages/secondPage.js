module.exports = {
//url:'https://screenployee-allthingstalk.firebaseapp.com/',

url:function(){
return 'https://www.maxi.rs/login?lastViewedPage=/registration';
},


elements: {

  ginger:{selector:'select#contactTitle option[value="mrs"]'},
  customerType:{selector:'select#customerType option[value="Individual"]'},
  firstName:{selector: 'input#contactFirstName'},
  lastName:{selector: 'input#contactLastName'},
  email: {selector: 'input#registrationEmailAddress'},
  phone: {selector: 'input#registrationPhoneNumber'},
  password:{selector:'input#contactPassword'},
  chackBox:{selector:'input#agreeTermsConditions.float-left.Checkbox.Primary.field-error'},
  buttonSubmit:{selector:'input[value="Registrujte se"]'},
  errorMesage:{selector:'span#undefined'}


},

//definisanje funkcija uz pomoc kojih unosimo vrednosti u polja, kliknemo na dugme etc..
commands: [
  {

    addfirstName: function(firstName){
      return this.waitForElementPresent('@firstName', 6000)
                 .click('@firstName',6000)
                 .setValue('@firstName', firstName);
    },

  addLastName: function(lastName){
    return this.waitForElementPresent('@lastName', 3000)
               .click('@lastName')
               .setValue('@lastName', lastName);
  },

  addEmail: function(email){
    return this.waitForElementPresent('@email', 3000)
               .click('@email')
               .setValue('@email', email);
  },

  addPassword: function(password){
    return this.waitForElementPresent('@password', 3000)
               .click('@password')
               .setValue('@password', password);
  },


  veryfyErrorMesageShown: function(){
    return this.waitForElementPresent('@errorMesage', 3000, "Message is here.");

  },

  clickButton: function(){
    return this.click('@buttonSubmit')
  }


}]
};
