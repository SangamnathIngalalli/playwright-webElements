import { test, expect } from "playwright/test";

test('DatePicker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const datepicker = await page.click('#datepicker'); 

    const year = "2026";
    const month = "August";
    const date = "22";


    while(true)
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth == month)
            break;
    
        await page.locator(('span:has-text("Next")')).click();


    }

    await page.locator(`a[data-date="${date}"]`).click();





})