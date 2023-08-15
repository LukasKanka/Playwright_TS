import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Search web' , async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHome();
    await homePage.enterTextSearchFields();
    await homePage.clickSearchButton();

});