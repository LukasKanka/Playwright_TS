import { test, expect } from '@playwright/test';

//pokud zapíšeme za test.only spustíme pouze jeden tento test 
test('Element state', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    //Vypíšeme zda stav elementu jestli je editovatelný
    console.log(await page.locator('#user-name').isEditable());

    //Vypíšeme zda stav elementu jestli je viditelný
    console.log(await page.locator('#password').isVisible());

    //Vypíšeme zda stav elementu jestli je skrytý 
    console.log(await page.locator('#login-button').isHidden());
   


});