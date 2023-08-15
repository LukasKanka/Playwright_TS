import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { HomePage } from '../page-objects/HomePage';

// přihlášení na HomePage a ověření textu domovské stránky.
test('Verify home title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(homePage.title).toBeVisible();
});

// test přidání produktu do košíku a kontrola že zobrazuje 1 položka v košíku
test('Verify add to card functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await homePage.clickOnAddToCart();
  await expect(homePage.cardBadge).toHaveText("1");
});

//Odstranit produkt z košíká zkontrolovat že v něm není

//vytvořit novou třídu pro produkt page, identifikovat elementy, napsat test na přidání do košíku product page, kliknutína tlačítko back ověřím že se dostanu zpět na homePage



