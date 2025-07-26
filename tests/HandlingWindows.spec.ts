import { test, expect, chromium } from '@playwright/test';

test('Create new context and page', async ({ browser }) => {
  const context = await browser.newContext();     // 🧱 Isolated session
  const page = await context.newPage();           // 📄 New tab
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});



test('Handling windows at chomium',async ()=>{

const browser = await chromium.launch();
const context = await browser.newContext();


const page1 = await context.newPage();
await page1.goto('https://www.google.com/');


const page2= await context.newPage();
await page2.goto('https://demoblaze.com/');



const allPages = context.pages();
console.log("number of Pages created:" , allPages.length);


})



test.only('Open new tab via user action (target="_blank")', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Log in first if needed (some pages require it before interacting)

  // Wait for new tab to open when link is clicked
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for new page (tab) to open
    page.click("//a[normalize-space()='OrangeHRM, Inc']", { force: true }) // Click the link that opens it
  ]);

  // Wait until new tab is fully loaded
  await newTab.waitForLoadState();

  console.log('New tab title:', await newTab.title());
  console.log('New tab URL:', newTab.url());



  await newTab.pause();
});
