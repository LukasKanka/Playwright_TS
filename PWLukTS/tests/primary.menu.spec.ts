import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';



// test Textů v menu
test('Otestování textů v menu', async ({ page }) => {

    const verifyTextMenu = [
       "Úvodní stránka",
       "O mně",
       "Zásady ochrany osobních údajů",
       "Podporovatelé"
    ];

    const homepage = new HomePage(page);
    await homepage.gotoHome();


    const navLinks =  page.locator('#menu-menu-1 li[id*=menu]');

    for (const el of await navLinks.elementHandles())  {
        console.log(await el.textContent());
     }

    expect(await navLinks.allTextContents()).toEqual(verifyTextMenu);

   
  });