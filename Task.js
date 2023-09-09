// Import the Selector function from TestCafe
import { Selector } from 'testcafe';

// Define a test fixture with the starting URL
fixture('Login Tests')
  .page('https://dev.deepthought.education/login');

// Define a test function for successful login with valid credentials
test('Test successful login with valid credentials', async t => {
  // Type the username and password into the input fields
  await t
    .typeText('#username', 'ramk98445@gmail.com')
    .typeText('#password', 'Prem@1234');

  // Click the login button
  await t.click('.btn');

  // Verify that the user is redirected to the dashboard screen
  await t.expect(Selector('H5').withExactText('Welcome to DeepThought').exists).ok();
});



// Define a test function for unsuccessful login attempts with invalid credentials
test('Test unsuccessful login attempts with invalid credentials', async t => {
    // Type an invalid username and password into the input fields
    await t
      .typeText('#username', 'kkkk@gmail.com')
      .typeText('#password', '123');
  
    // Click the login button
    await t.click('.btn');
  
    // Verify that an appropriate error message is displayed
    await t.expect(Selector('div').innerText).contains('Login Unsuccessful');
});
