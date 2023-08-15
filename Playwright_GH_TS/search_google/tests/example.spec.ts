//****Tento projekt je TypeScript****//

import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

test('has title', async ({ page }) => {
 // const browser = await chromium.launch();
 // const context = await browser.newContext();
  await page.goto('https://www.google.com');

  // Odsouhlasí cookies  
  await page.click("#W0wltc > div");  

  // Najdeme pole vyhledávání a napíšeme do něj slovo "test"
  const searchInput = await page.$('[name="q"]');
  await searchInput?.type('test');

  // Potvrdíme vyhledávání stisknutím klávesy Enter
  await searchInput?.press('Enter');

  // Nebo můžeme kliknout na tlačítko pro vyhledávání
  // const searchButton = await page.$('[name="btnK"]');
  // await searchButton?.click();

  // Vypíše název stránky do konzole  
  const title = await page.title();  
  console.log(title);  

  //await page.waitForNavigation();
 // console.log('Search results page title:', await page.title());

 // await browser.close();
});
