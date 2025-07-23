import { test, expect } from "playwright/test";

test('mouse over', async ({ page }) => {


    await page.goto('https://www.amazon.in/');

    const mouseHover = await page.getByRole('link', { name: 'Fresh', exact: true });

    mouseHover.hover();


    await page.waitForTimeout(5000);


})



test('hover over menu item', async ({ page }) => {
  await page.goto('https://example.com');

  // Hover over the menu
  await page.hover('.menu-item');

  // Now click the submenu item that appears on hover
  await page.click('.submenu >> text=Electronics');
});




