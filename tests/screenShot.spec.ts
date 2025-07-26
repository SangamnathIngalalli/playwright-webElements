import {test, expect} from '@playwright/test'

test('screen shot', async ({page})=>{


  await  page.goto('https://www.google.com/');

  await page.screenshot({path:'tests/pics/'+ Date.now()+'google-homepage.png'});

})



test(' fail screen shot', async ({ page }, testInfo) => {
  try {
    await page.goto('https://www.google.com');

    // Simulate a failure (you can remove this in real tests)
    await expect(page).toHaveURL('https://www.bing.com');

  } catch (error) {
    // Take screenshot only if the test fails
    await page.screenshot({
      path: `tests/pics/${Date.now()}-failure.png`,
    });
    throw error; // Re-throw to ensure the test is marked as failed
  }
});
