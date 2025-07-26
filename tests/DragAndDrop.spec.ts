import { test, expect } from "playwright/test";

test('alert', async ({ page }) => { 


    await page.goto('https://jqueryui.com/droppable/');

      const frame = page.frameLocator('.demo-frame');


    const drag = await frame.locator('#draggable');

    const drop = await frame.locator('#droppable');


  await  drag.dragTo(drop);


    await page.waitForTimeout(5000);

    })
