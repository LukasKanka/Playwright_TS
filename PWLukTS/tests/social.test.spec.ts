import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';



test('Sociální sítě X- kliknutí na Homepage' , async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.gotoHome();
    // Klikne na ikonu Twitter a přesměrujeme se na web Twitter
    await homePage.clickXsocialButton();
    const expectedUrl = 'https://twitter.com/KankysCZ';
    // Kontrola odkazu z prokliku že jsem na správné stránce, než nám Musk změní adresu
    const currentUrl = await page.url();
    if (currentUrl === expectedUrl) {
        console.log('Super jsi na správné stránce!');
    } else {
        console.log(`Průser jsi nejsi na správné stránce. Jsi tu ${currentUrl}`);
    }



});

test('Sociální sítě LinkId - kliknutí na Hompage', ({page}) => {
    const homePage = new HomePage(page);
})