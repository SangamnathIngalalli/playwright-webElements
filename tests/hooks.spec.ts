import {test, expect} from '@playwright/test'



test.beforeEach(async ({page})=>{


// page = await browser.newPage();

    
await page.goto('https://opensource-demo.orangehrmlive.com/');

await page.getByRole('textbox', { name: 'Username' }).fill('admin');

await page.getByRole('textbox', { name: 'password'}).fill('admin123');

await page.getByRole('button',  { name: "login"}).click();


})




test('lougout', async({page})=>{

await page.getByText('Hello Div', {exact : true}).click();

await page.getByRole('menuitem', {name : 'Logout' }).click();

})

