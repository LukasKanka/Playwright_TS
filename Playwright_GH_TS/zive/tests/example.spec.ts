import { test, expect } from '@playwright/test';  
import { chromium } from '@playwright/test';


  test('has title', async ({ page }) => { 

    await page.goto('https://zive.cz');  
   
   // Odsouhlasí cookies  
   await page.click("//button[@id='didomi-notice-agree-button']/span");  

   // takto 
   //const button = await page.locator("//button[@id='didomi-notice-agree-button']");  
   //await button.click();  

   // Klikne na menu  
   await page.click("//a[contains(text(),'Menu')]");  

   // vrátí se na hlavní stranu 
   await page.click("#mainFORM > nav > div > div.header > a.mn-logo");  

   // klikne do vyhledávání
   await page.click("//a[@onclick='layout.menu.toggle(true)']");

   // klikne do vyhledávacího pole
   const searchInput = await page.$("#mainFORM > nav > div > div.header > div");
  await searchInput?.type('test');

  // Potvrdíme vyhledávání stisknutím klávesy Enter
  await searchInput?.press('Enter');

  // vrátíme se na hlavní stránku
  await page.click('//*[@id="mainFORM"]/div[3]/header/div[2]/div/a');

   // Zkontrolujeme, že stránka má správný název
   const pageTitle = await page.title();
   expect(pageTitle).toBe('Živě.cz – O počítačích, internetu, vědě a technice');


  

   
  
  }); 
