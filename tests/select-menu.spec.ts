import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
});

test('Select Menu test',
  {tag:['@test']},
   async ({ page }) => {
  await page.locator('#oldSelectMenu').selectOption('Green');
  await page.locator('#cars').selectOption('volvo'); 
});
