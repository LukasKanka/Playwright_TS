/*   
 Zápis pomocí Page_Objects --> je kratší, čitatelnější a přehlednější. Pokud se například změní lokátor id nemusím ho měnit ve všech testech
ale, v daném page-objects
ctrl + click mě přesune na zadanou metodu!! 
 */
import { test, expect } from '@playwright/test';
//Importujeme vytvořenou třídu z page-objects
import { LoginPage } from '../page-objects/LoginPage';

test('Successful login', async ({ page }) => {
  // nová instance loginPage odkazuje na metody co jsme si vytvořili v LoginPage
  const loginPage = new LoginPage(page);
  // zadáme metody co jsme vytvořily v LoginPage
  await loginPage.gotoLoginPage();
  // místo tohoto použijeme námi vytvořenou metodu login z LoginPage
  //await loginPage.enterValidUsername();
  //await loginPage.enterValidPassword();
  //await loginPage.clickLoginButton();
  // metoda login
  await loginPage.login();
  // ověříme že jsme se úspěšně přihlásily
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  /* 
  // způsob jeden test komplet v kódu bez odkazu na page-objects
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Zkontrolujeme jestli na stránce je viditelný Swag Labs
  await expect(page.getByText('Swag Labs')).toBeVisible();
  */
});

// test přihlášení s neplatným heslem
test('Cannot login with valid username and invalid password', async ({ page }) => {
  // test reporty(video 23):

 const loginPage = new LoginPage(page);
 await loginPage.gotoLoginPage();
 await loginPage.enterValidUsername();
 await loginPage.enterInvalidPassword();
 await loginPage.clickLoginButton();
 await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


 //test s neplatným přihlašovacím jménem
 test('Cannot login with invalid username and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterInvalidUsername();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();

});

//test pouze s kliknutím na login button
test('Cannot login with blank fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.clickLoginButton();
  await expect(loginPage.requiredCredentialsErrorMassage).toBeVisible();

});

// přihlášení s zablokovaným userem
test('Cannot login with locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterLockedOutUser();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.lockedOutErrorMassage).toBeVisible();

});
