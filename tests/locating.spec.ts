import { chromium } from 'playwright';

(async () => {
  // Launch browser (not headless so you can see the action)
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Go to Google
  await page.goto('https://www.google.com');

  // Try to accept cookies if shown
  try {
    await page.click('button:has-text("I agree")', { timeout: 5000 });
  } catch {
    // If the cookie dialog isn't there, just continue
  }

  // Type the search query
  const query = 'sangam';
  await page.fill('textarea[name="q"]', query);

  // Wait for the autocomplete list to load
  await page.waitForSelector('.G43f7e li');

  // Extract suggestions
  const suggestions = await page.$$eval('.G43f7e li', items =>
    items.map(item => item.textContent?.trim()).filter(Boolean)
  );

  // Print the suggestions
  console.log(`Google suggestions for "${query}":`);
  suggestions.forEach((suggestion, index) => {
    console.log(`${index + 1}. ${suggestion}`);
  });

  // Close the browser
  await browser.close();
})();
