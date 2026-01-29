import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(process.env.URL!);
  await page.locator('#firstName').fill('John Doe');
  await page.locator('#lastName').fill('Watson');
  await page.locator('#userNumber').fill('0123456789');
  await page.getByText('Male', {exact: true}).check();
});

