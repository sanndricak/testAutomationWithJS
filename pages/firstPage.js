module.exports = {
//url:'https://screenployee-allthingstalk.firebaseapp.com/',

url:function(){
return 'https://www.maxi.rs/login?lastViewedPage=/registration';
},

//definisanje polja koja testiramo na stranici
elements: {
  iconNalog:{selector:'input[value="Registrujte se"]'},
  emailOrPhone:{selector:'input#emailOrPhoneNumber'},
  passwordField:{selector:'input#password-current'},
  buttonSignIn:{selector:'input[value="Prijavite se"]'}

},

//definisanje funkcija uz pomoc kojih unosimo vrednosti u polja, kliknemo na dugme etc..
commands: [{

 openregisterPage: function()
 {
   return this.waitForElementPresent ('@iconNalog', 6000)
              .click ('@iconNalog');
  },


  insertEmailuserName: function(emailuserName)
  {
    return this.waitForElementPresent ('@emailOrPhone', 6000)
               .click ('@emailOrPhone')
               .setValue('@emailOrPhone', emailuserName);

   },
   insertPassword: function(passworduserName)
   {
     return this.waitForElementPresent ('@passwordField', 6000)
                .click ('@passwordField')
                .setValue('@passwordField', passworduserName);

    },
    cickOnSingInButton: function()
    {
      return this.waitForElementPresent ('@buttonSignIn', 6000)
                 .click ('@buttonSignIn');

     }

}]
};
