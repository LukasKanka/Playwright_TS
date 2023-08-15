import { test, expect } from '@playwright/test';

test('potvrzeni cookie', async ({ page }) => {
  await page.goto('https://www.kiwi.com/cz');
  await page.locator('[data-test="CookiesPopup-Accept"]').click();
  await page.locator("//*[@id='HomePage']/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/a").click();
  
  
});

