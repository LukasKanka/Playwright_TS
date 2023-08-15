import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lukan.cz/');
  await page.getByRole('link', { name: 'Úvodní stránka' }).click();
});