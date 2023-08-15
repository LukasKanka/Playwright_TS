import { test, expect } from '@playwright/test';
import { loadHomepage, cokieeAccept
 } from "../helpers";

 test('1' , async ({ page }) => {
    await loadHomepage(page);
    await cokieeAccept(page);


 });