import { test, expect } from "playwright/test";

test('alert', async ({ page }) => {


  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog=>{

    expect(dialog.type()).toBe('alert');
    expect (dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

  })



  await page.click('//*[@id="alertBtn"]');
  await page.waitForTimeout(5000);


});




test('confirmation Dialog', async ({ page }) => {


  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog=>{

    expect(dialog.type()).toBe('confirm');
    expect (dialog.message()).toContain('Press a button!');
    await dialog.accept(); // for okay button
//    await dialog.dismiss(); // for cancel button

  })



  await page.click('//*[@id="confirmBtn"]');
  await page.waitForTimeout(5000);


});



test('Promt Dialog', async ({ page }) => {


  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog=>{

    expect(dialog.type()).toBe('prompt');
    expect (dialog.message()).toContain('Please enter your name:');
    await dialog.accept('Sangam'); 

  })



  await page.click('//*[@id="promptBtn"]');
  await page.waitForTimeout(5000);


  await expect(page.locator('//*[@id="demo"]')).toHaveText('Hello Sangam! How are you today?');


});
