import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.zive.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit s naším zpracováním údajů a zavřít' }).click();
  await page.getByRole('link', { name: 'Menu' }).click();
  await page.getByPlaceholder('Hledat na Živě').click();
  await page.getByPlaceholder('Hledat na Živě').fill('zive');
  await page.goto('https://www.zive.cz/vysledky-vyhledavani/sc-236/?q=zive');
  await page.getByRole('link', { name: 'O počítačích, IT a internetu - Živě.cz' }).click();
});