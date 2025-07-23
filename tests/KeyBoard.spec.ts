import { test, expect } from "playwright/test";

test('alert', async ({ page }) => { 


    await page.goto('https://www.diffchecker.com/');

    const textbox = await page.getByRole('textbox', { name: 'Original text input' })
    
    await textbox.fill('Hello Sangam');


    await page.getByRole('button', { name: 'Close modal' }).click();


    await textbox.keyboard.press('Control + A');

    await textbox.keyboard.press('Control + C');


   const copytext= await page.getByRole('textbox', { name: 'Changed text input' })



})



