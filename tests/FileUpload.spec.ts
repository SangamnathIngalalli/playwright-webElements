import { test, expect } from "playwright/test";

test('File Upload', async ({ page }) => { 

    await page.goto('https://practice.expandtesting.com/upload');


   // await page.locator('#fileInput').setInputFiles('tests/inputFile/file1.txt');


        await page.locator('#fileInput').setInputFiles([
            'tests/inputFile/file1.txt',
            'tests/inputFile/file2.txt'

        
        ]);



    })


