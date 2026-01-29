import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('John Doe');
  await page.locator('#userEmail').fill('john.doe@example.com');
  await page.locator('#currentAddress').fill('123 Main St');
  await page.locator('#permanentAddress').fill('456 Elm St');
  await page.locator('#submit').click();
});