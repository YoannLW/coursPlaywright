import { test, expect } from '@playwright/test';
import testData from '../dataset/category.json';

test.describe('Automation Practice Form Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  test('Remplir et soumettre le formulaire avec succès', async ({ page }) => {
    // Remplir le prénom
    await page.locator('#firstName').fill(testData[0].prenom);
    
    // Remplir le nom
    await page.locator('#lastName').fill(testData[0].nom);
    
    // Remplir l'email
    await page.locator('#userEmail').fill(testData[0].email);
    
    // Sélectionner le genre
    await page.getByText('Male', { exact: true }).click();
    
    // Remplir le numéro de téléphone (10 chiffres requis)
    await page.locator('#userNumber').fill('0612345678');
    
    // Soumettre le formulaire
    await page.locator('#submit').click();
    
    // Vérifier que la modal de confirmation s'affiche
    await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible();
    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
    
    // Vérifier que les données soumises sont correctes dans la modal
    await expect(page.locator('.modal-body')).toContainText(testData[0].prenom + ' ' + testData[0].nom);
    await expect(page.locator('.modal-body')).toContainText(testData[0].email);
  });

  test('Vérifier les champs requis', async ({ page }) => {
    // Essayer de soumettre sans remplir les champs
    await page.locator('#submit').click();
    
    // Vérifier que les champs requis sont marqués en rouge
    await expect(page.locator('#firstName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('#lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

  test('Vérifier la validation de l\'email', async ({ page }) => {
    // Remplir avec un email invalide
    await page.locator('#userEmail').fill('email-invalide');
    await page.locator('#submit').click();
    
    // Vérifier que le champ email est marqué comme invalide
    await expect(page.locator('#userEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });
});
