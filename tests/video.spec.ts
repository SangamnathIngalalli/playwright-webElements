import {test,expect} from '@playwright/test'

test('video', async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123');

    await page.getByRole('button', {name: 'Login'}).click();


    await expect(page).toHaveTitle('OrangeHRM');

    await page.waitForTimeout(2000);

})



import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'on', // or 'retain-on-failure', 'off'
  },
});


