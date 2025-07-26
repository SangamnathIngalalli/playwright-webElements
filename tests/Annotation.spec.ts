import {test,expect} from '@playwright/test'

// ✅ Run only this test (use during debugging)
test.only('Run only this test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

// 🚫 This test is skipped (won't run)
test.skip('Skip this test for now', async ({ page }) => {
  await page.goto('https://example.com');
  // This test is temporarily disabled
});

// 🐢 Marked as slow — allows more time to complete
test.slow('This test is slow', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForTimeout(5000); // simulate a long operation
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

// ❌ Expected to fail due to a known issue
test.fail('This is expected to fail for now', async ({ page }) => {
  await page.goto('https://example.com');
  // Intentional error or known failing case
  await expect(page.locator('h1')).toHaveText('Nonexistent Heading');
});

// 🛠️ Marked for investigation, will be skipped
test.fixme('Needs investigation', async ({ page }) => {
  // This test is broken or not yet ready
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

test('test 5', async ({ page }) => {
 
    test.fail();
});
