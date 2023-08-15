import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Click menu button with HomePage' , async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHome();
    await homePage.clickUvodniStranaButton();
    await homePage.clickOMneButton();
    await homePage.clickZOOUButton();
    await homePage.clickPodporovateleButton();
   
   //await context.close();
  //await browser.close();
});