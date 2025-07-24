import {test,expect} from '@playwright/test'

  test.beforeAll(async () => {
    console.log('>> beforeAll');
  });

  test.beforeEach(async () => {
    console.log('>> beforeEach');
  });

  test.afterEach(async () => {
    console.log('>> afterEach');
  });

  test.afterAll(async () => {
    console.log('>>  afterAll');
  });


test.describe('group 1', ()=>{

    test('test1',({page})=>{
        console.log("test 1")
    });


    test('test2',async({page})=>{
        console.log('test 2')
    });
});



test.describe('group 2', ()=>{

    test('test3',({page})=>{
        console.log("test 3")
    })


    test('test4',async({page})=>{
        console.log('test 4')
    })
});