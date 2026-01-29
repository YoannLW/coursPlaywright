import { Locator, Page } from "@playwright/test";
import {faker} from '@faker-js/faker'; // à jouter si on génère des valeurs aléatoires

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
        await this.lastNameInput.fill(faker.person.lastName());
        await this.firstNameInput.fill(faker.person.firstName());
        await this.emailInput.fill(faker.internet.email());
        await this.genderInput.click();
        await this.boutonSubmit.click()
    }
}