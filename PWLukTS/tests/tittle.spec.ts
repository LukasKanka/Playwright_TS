import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Kontrola titulku', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHome();
    await expect(page).toHaveTitle('Lukáš bloguje - Blog o všem možném i nemožném');

});