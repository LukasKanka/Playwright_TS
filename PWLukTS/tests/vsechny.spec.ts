import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Kolekce testů', () => {
    test('Kontrola titulku', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.gotoHome();
        await expect(page).toHaveTitle('Lukáš bloguje - Blog o všem možném i nemožném');
    
    });

    test('Kontrola textu na stránce', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.gotoHome();
        
        const headingText = await page.locator('text=Lukáš bloguje Blog o všem možném i nemožném ');
        await expect(headingText).toBeVisible();

        await expect(page).toHaveURL(/./);
    
    });

    test('HomePage click Accept cookies', async ({ page }) => {
    
        const homePage = new HomePage(page);
        await homePage.gotoHome();
        await homePage.clickCookiesButtonAccept();
      });
    
    
      // test zamítnutí cookies
    test('HomaPage click Decline cookies' , async ({page}) => {
      const homePage = new HomePage(page);
      await homePage.gotoHome();
      await homePage.clickCookiesButtonDecline();
    })

    test('Click menu button with HomePage' , async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.gotoHome();
        await homePage.clickUvodniStranaButton();
        await homePage.clickOMneButton();
        await homePage.clickZOOUButton();
        await homePage.clickPodporovateleButton();
    });

    test('Search web' , async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.gotoHome();
        await homePage.enterTextSearchFields();
        await homePage.clickSearchButton();
    
    });

    test('test', async ({ page }) => {
        await page.goto('https://lukan.cz/');
        await page.getByRole('link', { name: 'Úvodní stránka' }).click();
      });

      test('Otestování textů v menu', async ({ page }) => {

        const verifyTextMenu = [
           "Úvodní stránka",
           "O mně",
           "Zásady ochrany osobních údajů",
           "Podporovatelé"
        ];
        
        await page.goto('https://lukan.cz/')
    
    
        const navLinks =  page.locator('#menu-menu-1 li[id*=menu]');
    
        for (const el of await navLinks.elementHandles())  {
            console.log(await el.textContent());
         }
    
        expect(await navLinks.allTextContents()).toEqual(verifyTextMenu);
    
       
      });






});

