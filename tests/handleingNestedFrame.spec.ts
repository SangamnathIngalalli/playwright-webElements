import { test, expect } from "@playwright/test";

test("Find child frames of a parent frame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // Get all frames on the page
  const allFrames = page.frames();

  // Find the frame with src="frame_3.html"
  const frame3 = allFrames.find(f => f.url().includes("frame_3.html"));

  if (!frame3) {
    console.log("Frame 3 not found");
    return;
  }

  console.log("Frame 3 found:", frame3.url());

  // Find all child frames of frame3
  const childFrames = allFrames.filter(f => f.parentFrame() === frame3);

  console.log(`Child frames of frame_3.html: ${childFrames.length}`);
  for (const child of childFrames) {
    console.log(`Child frame URL: ${child.url()}`);
  }
});





test('Interact with nested frame using frameLocator', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const nestedFrameLocator = page
    .frameLocator('iframe[src="frame_3.html"]')         // outer frame
    .frameLocator('iframe');                            // inner frame inside outer

  

    if(nestedFrameLocator)
      console.log("pass");
    else  
      console.log("fail");


     const radio = nestedFrameLocator.locator('#i6');
  await radio.waitFor({ state: 'visible', timeout: 10000 });

  await radio.click();


  await page.waitForTimeout(10000);

});
