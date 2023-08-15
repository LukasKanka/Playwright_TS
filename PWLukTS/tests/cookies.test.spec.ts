import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';


// test odsouhlasení cookies
test('HomePage click Accept cookies', async ({ page }) => {
    
    const homePage = new HomePage(page);
    await (await homePage.gotoHome())
        .clickCookiesButtonAccept();
  });


  // test zamítnutí cookies
test('HomaPage click Decline cookies' , async ({page}) => {
  const homePage = new HomePage(page);
  await (await homePage.gotoHome())
  .clickCookiesButtonDecline();
});