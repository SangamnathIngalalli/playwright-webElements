import { test, expect } from "playwright/test";

test('frame', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Get all frames (no await needed)
  const totalFrames = page.frames();
  console.log("total frames =", totalFrames.length);

  // Approach 1: Fill input in frame_1.html using frame URL
  const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
  await frame1?.fill('[name="mytext1"]', 'sangam');

  // Approach 2: Use frameLocator with src selector
  await page
    .frameLocator('frame[src="frame_2.html"]')
    .locator('[name="mytext2"]')
    .fill('Ruthu');

  // Attempt to locate frame2 by name (will fail on this site)
  const frameByName = page.frame({ name: 'frame2' });
  if (frameByName) {
    console.log(`✅ frame2 found with URL: ${frameByName.url()}`);
  } else {
    console.log('❌ frame2 not found');
  }

  // Print all frames and their URLs
  for (const f of totalFrames) {
    console.log(`🧭 Frame: name=${f.name()} | url=${f.url()}`);
  }
});



