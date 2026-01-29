import { test } from '@playwright/test';
import { FormsPage } from './pages/form';

test('test first name', async ({ page }) => {
    const pageForms = new FormsPage(page);
    await page.goto("https://demoqa.com/automation-practice-form");
    await pageForms.fillForm();

});