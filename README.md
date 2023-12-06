# Course-Selling-App

Title: Web Application for Course Selling Platform

Description:
This web application is a comprehensive platform designed for selling and managing courses. Built using Node.js and Express, it features robust authentication mechanisms for both administrators and users, ensuring secure access to the system.

**Key Features:**

1. **User Authentication:**
   - Admin and user authentication is implemented through secure username/password verification.
   - Admins have exclusive access to certain routes, ensuring the security and integrity of the course management system.

2. **Admin Management:**
   - Admins can sign up, log in, and manage courses effortlessly.
   - Course creation and modification are restricted to authenticated admins, ensuring that only authorized personnel can modify course details.

3. **Course Management:**
   - Admins can create, update, and retrieve course information.
   - Each course is assigned a unique identifier upon creation, and admins can modify course details through a dedicated API endpoint.

4. **User Registration and Authentication:**
   - Users can sign up and log in securely, with the system preventing duplicate user registrations.
   - Authentication middleware ensures that only registered users can access specific routes.

5. **User Course Interaction:**
   - Users can view a list of available courses that have been published.
   - Purchasing a course is facilitated through a dedicated API endpoint, with successful transactions updating the user's purchased courses list.

6. **User Course Access:**
   - Users can view their purchased courses, ensuring a seamless experience for accessing and tracking owned content.

**How to Use:**
1. **Admin Actions:**
   - Admins can sign up using the `/admin/signup` route.
   - Log in as an admin using the `/admin/login` route.
   - Create, update, and retrieve courses using the `/admin/courses` and `/admin/courses/:courseId` routes.
   - View all courses using the `/admin/courses` route.

2. **User Actions:**
   - Users can sign up using the `/users/signup` route.
   - Log in as a user using the `/users/login` route.
   - View available courses using the `/users/courses` route.
   - Purchase a course using the `/users/courses/:courseId` route.
   - View purchased courses using the `/users/purchasedCourses` route.

**Note:**
Ensure that the application is hosted on port 3000.

**Get Started:**
1. Install Node.js and npm.
2. Install the necessary packages using `npm install`.
3. Run the application using `node <filename>.js` (replace `<filename>` with the actual filename).

This web application provides a robust foundation for managing courses, ensuring secure authentication and streamlined interactions for both administrators and users.
