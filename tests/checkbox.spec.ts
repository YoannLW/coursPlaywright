import { test, expect } from '@playwright/test';

// test.beforeEach()

test('checkbox', async ({ page }) => {
    await page.locator('//span[text()="Check Box"]').click();

    await page.getByRole('button', { name: 'Toggle' }).click();
    await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().check();
    await page.getByRole('listitem').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();
    await page.locator('label').filter({ hasText: 'Notes' }).getByRole('img').first().uncheck();

    await expect(page.locator('#result')).toContainText('desktop');
    await expect(page.locator('#result')).not.toContainText('notes');
});