import {test as base} from '@playwright/test';
import { FormsPage } from '../pages/form';

type Fixture ={
    formulaire : FormsPage;
};

const test = base.extend<Fixture>({
    formulaire: async ({page}, use) => {
        await use (new FormsPage(page));
    },
});

const expect = base.expect;
export {test, expect};
