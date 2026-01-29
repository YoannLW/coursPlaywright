import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('DemoQA Upload and Download', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');
  });

  test('should download the file', async ({ page }) => {
    const downloadPromise = page.waitForEvent('download');

    await page.locator('#downloadButton').click();
    
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('sampleFile.jpeg');
    
  });

  test('should upload a file', async ({ page }) => {
    const filePath = path.join(__dirname, 'upload-test.txt');

    await page.locator('#uploadFile').setInputFiles(filePath);

    const resultText = page.locator('#uploadedFilePath');
    await expect(resultText).toBeVisible();
    await expect(resultText).toContainText('upload-test.txt');
  });

});