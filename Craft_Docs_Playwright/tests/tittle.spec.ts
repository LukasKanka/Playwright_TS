import { test, expect } from '@playwright/test';
import { HomePage } from "../page-objects/HomePage";

test('Kontrola textu titulku', async ({page}) =>{
    const homePage:HomePage = new HomePage(page);
    await homePage.gotoHome();
    await expect(page).toHaveTitle('🤠 Ahoj právě se nacházíš v mém veřejném Notesu Lukáše Kaňky, který slouží jako má Digitální zahrada. 🤙 Nejdeš tu všechny mé články návody, spousty informací a mé myšlenky.')
})