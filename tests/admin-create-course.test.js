// import { test, expect } from '@playwright/test';

// test('Admin should be able to navigate to Create New Course page', async ({ page }) => {
//   console.log("🔄 Navigating to Login Page...");
//   await page.goto('http://localhost:5173/auth');

//   // **Step 1: Login as Admin**
//   console.log("🔄 Waiting for login form...");
//   await page.waitForSelector('input[type="email"]');
//   await page.waitForSelector('input[type="password"]');

//   console.log("✅ Found email and password fields!");
//   await page.fill('input[type="email"]', 'a@gmail.com');
//   await page.fill('input[type="password"]', '1');

//   console.log("✅ Clicking login...");
//   await page.click('button[type="submit"]');

//   // **Step 2: Ensure Successful Login & Redirect**
//   console.log("🔄 Waiting for redirect to Instructor Dashboard...");
//   await page.waitForURL('http://localhost:5173/instructor', { timeout: 10000 });
//   console.log("✅ Successfully redirected to Instructor Dashboard!");

//   // **Step 3: Switch to Courses Tab**
//   console.log("🔄 Switching to Courses tab...");
//   await page.click('button:has-text("Courses")');

//   // **Wait for API & UI to Load**
//   console.log("🔄 Waiting for Courses tab content...");
//   await page.waitForLoadState('networkidle');
//   await page.waitForTimeout(2000); // Allow UI animations

//   // **Check if "Create New Course" Button Exists**
//   const createCourseButton = page.locator('button:has-text("Create New Course")');
//   await expect(createCourseButton).toBeVisible();
//   console.log("✅ Create New Course button is visible!");

//   // **Step 4: Click "Create New Course"**
//   console.log("🔄 Clicking Create New Course...");
//   await createCourseButton.click();

//   // **Step 5: Verify Navigation to Create Course Page**
//   console.log("🔄 Waiting for navigation to Create Course page...");
//   await page.waitForURL('http://localhost:5173/instructor/create-new-course', { timeout: 10000 });
//   console.log("✅ Successfully navigated to Create New Course page!");

//   // **Final Check: Verify Page Content**
//   await expect(page.locator('text=Create a New Course')).toBeVisible();
//   console.log("✅ Create Course page loaded successfully!");

//   console.log("🎉 Test Passed: Admin can open Courses tab & create a new course!");
// });
