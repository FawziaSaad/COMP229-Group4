Home Page
Method: GET
Endpoint: /
Description: Display the home page with a list of available surveys.
Authentication: Not required
The rest of the endpoints seem to have the correct authentication settings. I'll provide the revised documentation for the other endpoints:

Create Survey Page

Method: GET
Endpoint: /create-survey
Description: Display the page for creating a new survey.
Authentication: Required
Create Survey

Method: POST
Endpoint: /create-survey
Description: Process the form data to create a new survey.
Authentication: Required
My Surveys Page

Method: GET
Endpoint: /survey/mysurveys
Description: Display the user's own surveys.
Authentication: Required
Edit Survey Page

Method: GET
Endpoint: /survey/edit/:id
Description: Display the page to edit an existing survey.
Authentication: Required
Edit Survey

Method: PUT
Endpoint: /survey/edit/:id
Description: Process the form data to update an existing survey.
Authentication: Required
Delete Survey

Method: DELETE
Endpoint: /survey/:id
Description: Delete a specific survey.
Authentication: Required
Take Survey

Method: GET
Endpoint: /survey/:id
Description: Display the survey to be taken.
Authentication: Required
Submit Survey Responses

Method: POST
Endpoint: /survey/:id
Description: Submit the responses for a survey.
Authentication: Required
Survey Report

Method: GET
Endpoint: /survey/report/:id
Description: Display the report for a specific survey.
Authentication: Required
User Login

Method: POST
Endpoint: /login
Description: Process the login form data for user authentication.
Authentication: Not required
User Registration

Method: POST
Endpoint: /register
Description: Process the registration form data for user registration.
Authentication: Not required
User Logout

Method: POST
Endpoint: /logout
Description: Perform user logout.
Authentication: Required
---
Authentication: It appears that the server-side code is using Passport.js for user authentication. Specifically, it uses the passport-local strategy for local username/password authentication. The login and registration routes handle the authentication process. Ensure that the Angular client handles user login and registration forms accordingly, and sends the data to the corresponding API endpoints.
--
Data Format: From the server-side code, it appears that the data format used is JSON. Make sure that the Angular client sends requests and expects responses in JSON format. Angular's HttpClient automatically serializes and parses JSON data by default.
---
Try (http://localhost:3000/survey/mysurveys) as an endpoint! It should return a list of surveys created by the user admin. If you're not logged in, it should redirect you to the login page.
