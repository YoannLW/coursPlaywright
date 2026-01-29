import { test, expect} from './pages/fixtureForms';
import { FormsPage } from './pages/form';

test(' formulaire rempli', async ({ formulaire}) => {
    await formulaire.goto();
    //await formulaire.fillForm('Dupont', 'Jean', 'monemail@email.com'); enlever le commentaire si on utilise pas Faker
});
