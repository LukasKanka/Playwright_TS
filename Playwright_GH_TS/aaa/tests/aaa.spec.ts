import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.aaaauto.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  await page.getByRole('button', { name: 'Značka Vyberte značku' }).click();
  await page.getByText('Škoda', { exact: true }).first().click();
  await page.getByRole('button', { name: 'Model Vyberte model' }).click();
  await page.getByText('Citigo(40)').click();
  await page.getByRole('button', { name: 'Rok Vyberte stáří vozu' }).click();
  await page.getByText('Do 10 let').click();
  await page.getByRole('button', { name: 'Cena Vyberte cenu' }).click();
  await page.getByText('Do 200 000 Kč', { exact: true }).click();
  await page.getByRole('button', { name: 'Kategorie Vyberte kategorii' }).click();
  await page.locator('#hpFilterNG').getByText('Úsporné vozy').click();
  await page.getByRole('button', { name: 'Hledat' }).click();
});