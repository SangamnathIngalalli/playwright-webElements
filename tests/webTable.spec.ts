import {test,expect} from '@playwright/test'


test ('web table', async ({page}) =>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');


    //  1) to find the count
    const cols=  await table.locator('thead tr th');
    console.log(await cols.count());
    expect (await cols.count()).toBe(4);


    const rows = await table.locator('tbody tr');
    console.log(await rows.count());
    expect (await rows.count()).toBe(5);
    


    // 2) select for checkBox 4
     const matchedRow =  rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
     })

     await matchedRow.locator('input').check();



     // 3) mutiple Product select
   await selectProduct(rows,page,'Smartphone');
   await selectProduct(rows,page,'Wireless Earbuds');



   // 4) all product deatils
   for(let i=0;i< await rows.count();i++)
   {
            const row = rows.nth(i);
            const tds = row.locator('td');


        for(let j=0;j< await tds.count()-1;j++)
        {
                console.log(await tds.nth(j).textContent());
        }
   }


   // 5) #pagination

        const pagination =  await page.locator('#pagination li a');
        console.log(await pagination.count());

        for(let p=0 ;p< await pagination.count();p++)
        {
                if(p>0)
                {
                    await pagination.nth(p).click();
                }

                for(let i=0;i< await rows.count();i++)
                 {
                            const row = rows.nth(i);
                            const tds = row.locator('td');


                        for(let j=0;j< await tds.count()-1;j++)
                        {
                                console.log(await tds.nth(j).textContent());
                        }
                }
        }
})



// make function has as async as we are using wait
async function selectProduct (rows,page,name){
     const matchedRow =  rows.filter({
        has: page.locator('td'),
        hasText: name
     })

     await matchedRow.locator('input').check();
}


