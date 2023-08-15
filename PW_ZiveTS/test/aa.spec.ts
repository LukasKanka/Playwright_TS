const { chrome } = require('playwright');

(async () => {
  const browser = await chrome.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.aaaauto.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  await page.getByRole('button', { name: 'Značka Vyberte značku' }).click();
  await page.getByText('Škoda (2793)').first().click();
  await page.getByRole('button', { name: 'Model Vyberte model' }).click();
  await page.getByText('Citigo(40)').click();
  await page.getByRole('button', { name: 'Rok Vyberte stáří vozu' }).click();
  await page.getByText('Do 10 let').click();
  await page.getByRole('button', { name: 'Cena Vyberte cenu' }).click();
  await page.getByText('Do 200 000 Kč', { exact: true }).click();
  await page.getByRole('button', { name: 'Kategorie Vyberte kategorii' }).click();
  await page.getByText('Úsporné vozy (31)').click();
  await page.getByRole('button', { name: 'Hledat' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();