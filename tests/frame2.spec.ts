import {test, expect} from '@playwright/test'

test('Interact with second iframe on ui.vision', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');


 // total frames
  const allFrames  = await page.frames();
  console.log(allFrames.length);  

    // print all url
    allFrames.forEach((frame, i) => {
    console.log(`Frame ${i + 1}: name="${frame.name()}", URL="${frame.url()}"`);  // URL
  });
 


 // approach 1: use frame by URL
  const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_2.html' });

  // ✅ correct fill usage
  await frame1?.locator('input[name="mytext2"]').fill('Hello');


});




test.only('inner frame', async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});

    const childFrame = frame?.childFrames();

    await childFrame?.[0].locator('//*[@id="i6"]/div[3]/div').check();



})



