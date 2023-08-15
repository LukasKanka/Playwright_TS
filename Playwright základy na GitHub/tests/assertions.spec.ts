import { test, expect } from '@playwright/test';

//pokud zapíšeme za test.only spustíme pouze jeden tento test 
test('Element state', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    //Vypíšeme zda stav elementu jestli je viditelný
    await expect(page.locator('#user-name')).toBeVisible();
    //await expect(page.locator('#user-name')).toContain;

    //Vypíšeme zda stav elementu jestli je editovatelný
    await expect(page.locator('#password')).toBeEditable();

    //Vypíšeme zda stav elementu jestli je na stránce jedenkrát (to je číslo 1 v závorce)
    await expect(page.locator('#login-button')).toHaveCount(1);

    //Ověří že se některý element na stránce nenáchází. Přesný opak to.BeVisible. Na stránce by se neměl nacházet tento element
    await expect(page.locator('#skillmea')).not.toBeVisible();

});

// toto je idetifikovatelný element -- >  await page.locator('#user-name')
// Pokud nám test někde padá nebo chci případně přeskočit místo kde padl použiji .soft v tomto místě přeskočí chybu a pkračuje dál
// await expect.soft(page.locator('#password'))not.toBeEditable();

// seznam všech asertů můžeš získat  že za tešku vložím .toBeHave nebou .toBeContain
//await expect(page.locator('#user-name')).toContain;