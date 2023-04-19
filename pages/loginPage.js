const { I } = inject();

class LoginPage{


    constructor(){
        this.navBar = "//h2[contains(.,'Login')]"
        this.inputEmail = "#login > div:nth-child(1) > input"
        this.inputPassword = "#login > div:nth-child(2) > input"
        this.submitButton = ".LoginButton__primary___38GOe"
        this.loginPageText = "//span[contains(.,'Hello, John')]"
    }

    visit() {
        I.amOnPage("login")//concatena login a la url en el archivo de codecept.conf.js
        I.waitForElement(this.navBar)
        I.seeInCurrentUrl("login")
    }

    login(email, password) {
        I.waitForElement(this.inputEmail)
        I.fillField(this.inputEmail, email)  
        I.fillField(this.inputPassword, password)
        I.click(this.submitButton)
    }

    validateLogin() {
        I.waitForElement(this.loginPageText, 4) //el segundo parametro es un timeout de espera
        I.saveScreenshot('hello.png') 
    }  
}

module.exports = new LoginPage()
module.exports.LoginPage = LoginPage

