// import { test, expect } from '@playwright/test';

// test('Admin should be able to log in and be redirected to the instructor dashboard', async ({ page }) => {
//   console.log("🔄 Navigating to Login Page...");
//   await page.goto('http://localhost:5173/auth');

//   // Wait for login form to appear
//   console.log("🔄 Waiting for login form...");
//   await page.waitForSelector('input[type="email"]', { timeout: 5000 });
//   await page.waitForSelector('input[type="password"]', { timeout: 5000 });
//   console.log("✅ Found email and password fields!");

//   // Fill in credentials
//   await page.fill('input[type="email"]', 'a@gmail.com');
//   await page.fill('input[type="password"]', '1');
//   console.log("✅ Filled login credentials!");

//   // Click login button
//   await page.click('button:has-text("Login")');
//   console.log("✅ Clicked login, waiting for navigation...");

//   // Wait for navigation to instructor dashboard
//   await page.waitForURL('http://localhost:5173/instructor', { timeout: 10000 });
//   console.log("✅ Successfully logged in and redirected to Instructor Dashboard!");

//   // Verify the current URL
//   await expect(page).toHaveURL('http://localhost:5173/instructor');
// });
