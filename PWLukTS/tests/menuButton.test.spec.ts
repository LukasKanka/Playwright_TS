import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Click menu button with HomePage' , async ({ page }) => {
    const homePage = new HomePage(page);
    await (await (await (await (await (await homePage.gotoHome())
        .clickCookiesButtonAccept())
        .clickUvodniStranaButton())
        .clickOMneButton())
        .clickZOOUButton())
        .clickPodporovateleButton();
});