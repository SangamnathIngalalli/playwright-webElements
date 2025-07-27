import {test,expect} from '@playwright/test'


// Passing test
test('pass', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
});

// Failing test
test('fail', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Nonexistent Title'); // This will fail
});

// Skipped test
test.skip('skip', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
});

