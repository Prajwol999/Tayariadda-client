// import { test, expect } from '@playwright/test';

// test('Student should be able to access and navigate the Course Progress Page', async ({ page }) => {
//   console.log("🔄 Ensuring the server is running...");
  
//   // Wait for the server before running tests
//   let retries = 5;
//   while (retries > 0) {
//     try {
//       await page.goto('http://localhost:5173/auth', { timeout: 5000 });
//       break;
//     } catch (e) {
//       console.log(`⚠️ Server not ready, retrying (${5 - retries + 1}/5)...`);
//       await page.waitForTimeout(3000);
//       retries--;
//     }
//   }
  
//   // If still failing, throw an error
//   await page.goto('http://localhost:5173/auth', { timeout: 10000 });
//   console.log("✅ Navigated to Login Page!");
  
//   // Wait for login form
//   await page.waitForSelector('input[type="email"]', { timeout: 5000 });
//   await page.waitForSelector('input[type="password"]', { timeout: 5000 });

//   console.log("✅ Found email and password fields!");
//   await page.fill('input[type="email"]', 'ashoksubsc46@gmail.com');
//   await page.fill('input[type="password"]', '1');

//   console.log("✅ Filled login credentials!");
//   await page.click('button:has-text("Login")');

//   // Ensure navigation to home page
//   await page.waitForURL('http://localhost:5173/home', { timeout: 10000 });
//   console.log("✅ Successfully logged in and redirected to Home Page!");

//   // Navigate to Student Courses Page
//   await page.goto('http://localhost:5173/student-courses');
//   await expect(page).toHaveURL('http://localhost:5173/student-courses');
//   console.log("✅ Navigated to Student Courses Page!");

//   // Check if purchased courses exist
//   const courseCards = page.locator('.rounded-xl.overflow-hidden.shadow-md.border-gray-300');
//   const courseCount = await courseCards.count();
//   console.log(`✅ Found ${courseCount} purchased courses.`);

//   if (courseCount === 0) {
//     console.log("⚠️ No purchased courses found! Are you logged in as the correct user?");
//     return;
//   }

//   console.log("🔄 Clicking on the first purchased course...");
//   await courseCards.first().locator('button:has-text("Start Watching")').click();

//   console.log("🔄 Waiting for navigation to Course Progress Page...");
//   await expect(page).toHaveURL(/\/course-progress\/\w+/, { timeout: 10000 });
//   console.log("✅ Successfully navigated to Course Progress Page!");
// });
