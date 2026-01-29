import { Locator, Page } from "@playwright/test";
import testData from '../dataset/category.json';

export class FormsPage
 {
    lastNameInput: Locator;
    firstNameInput: Locator;
    emailInput: Locator;
    genderInput: Locator;
    boutonSubmit: Locator;

   constructor(private page: Page)
    {
        this.firstNameInput = this.page.locator('#firstName'); //voir le test fait la semaine précédente
        this.lastNameInput = this.page.locator('#lastName');
        this.emailInput = this.page.locator('#userEmail');
        this.genderInput = this.page.getByText('Male', {exact: true});
        this.boutonSubmit = this.page.locator('#submit');
    }

    async goto()
    {
        await this.page.goto("https://demoqa.com/automation-practice-form");
    }

    async fillForm()
    {
        await this.lastNameInput.fill(testData[0].nom);
        await this.firstNameInput.fill(testData[0].prenom);
        await this.emailInput.fill(testData[0].email);
        await this.genderInput.click();
        await this.boutonSubmit.click()
    }
}