// import třída modulů které budeme potřebovat
import { Locator, Page
 } from "@playwright/test";

//definujeme třídy (class)
export class LoginPage{
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialsErrorMessage: Locator;
    requiredCredentialsErrorMassage: Locator;
    lockedOutErrorMassage: Locator;

   // vytvoříme konstruktor třídy definuje proměnou page
   constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.invalidCredentialsErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
    this.requiredCredentialsErrorMassage = page.getByText('Epic sadface: Username is required');
    this.lockedOutErrorMassage = page.getByText('')
    this.lockedOutErrorMassage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
   }

   // teď si definujeme metody na práci s elementy výše this.userNameInput = page.locator('#user-name');
   // metoda na přejetí na stránku s Loginem
   async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
   }

    // metoda přihlašovacího jména 
    // protože chceme vepsat uživatelské jmáno použijeme metodu fill
    async enterValidUsername() {
        await this.userNameInput.fill('standard_user');
   }

   async enterLockedOutUser() {
    await this.userNameInput.fill('locked_out_user');
}

   // alternativy k valid budou invalid
   async enterInvalidUsername() {
    await this.userNameInput.fill('jmeno');
}
    
   // zde zapíšeme heslo
   async enterValidPassword() {
    await this.passwordInput.fill('secret_sauce');
   }

   async enterInvalidPassword() {
    await this.passwordInput.fill('heslo');
   }

    // klik na login button
    async clickLoginButton() {
        await this.loginButton.click();
    }


    // valid metody na ´ůspěšné přihlášení zapozdříme tímto způsobem:
    async login() {
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }

}

