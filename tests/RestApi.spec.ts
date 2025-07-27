import {test,request,expect} from '@playwright/test'


test('get', async()=>{


    const apiContext = await request.newContext();

  const response = await apiContext.get('https://reqres.in/api/users?page=2');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
  expect(body.data.length).toBeGreaterThan(0);

});


test.only('POST create user', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://reqres.in/api/users', {
    data: {
      name: 'John Doe',
      job: 'QA Engineer',
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);
  expect(body.name).toBe('John Doe');
});


test('PUT update user', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Jane Smith',
      job: 'Automation Lead'
    }
  });

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  console.log(body);
  expect(body.job).toBe('Automation Lead');
});


test('DELETE user', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.delete('https://reqres.in/api/users/2');

  expect(response.status()).toBe(204); // No Content
});
