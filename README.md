# fetch-code-assessment
The take-home component of the Fetch hiring evaluation.

# Project Description
This Angular project includes a webpage containing a component that prompts the user to fill out a submission form that allows them to sign-in/create an account.

# How To Use This Project
Upon the page loading, the user is presented with a form that has 5 required fields. When all fields are populated, the user then clicks the "create user" button to submit their information to the API endpoint. Three of the fields require the user to type their response, while the last two require the user to select on option from a pre-generated dropdown menu. If at least one of these fields are left incomplete, they will be prompted to fill out every field before being permitted to submit the form to the API.

# Known Issues
There is one known issue I was unable to resolve independently. When all fields are populated and after the form is validated, the submit function attempts to POST the form to the API endpoint but fails with an error of 400 (Bad Request) and the outgoing request is never sent.

These are the resulotions I have attempted so far:

-Using Postman to confirm my POST request is failing.
![postman-error](https://user-images.githubusercontent.com/86023455/150874201-119dbfd1-82f5-475a-b6a7-1d6947700ae5.jpg)

-Added a header to the request specifying that the request is in 'application/json' format.
![http-head](https://user-images.githubusercontent.com/86023455/150874500-a902bbf9-5a02-4f4f-8000-5dbd2ef12397.jpg)

-Confirmed the shape of the object being sent matches the shape of the object the API endpoint is expecting.
![data-shape](https://user-images.githubusercontent.com/86023455/150874943-573ac240-6185-4f41-8ff5-05d017fd1b35.jpg)

-Confirmed that the variable holding the form data is populated right before the POST request is sent.
![post-object-data](https://user-images.githubusercontent.com/86023455/150874813-332c1999-0211-4bd2-8903-26e281560bab.jpg)

While this was of relatively low importance, I also tried stringifying my response to check if that resolved the error, and I also attempted to use query params within Postman. Both with no success.

# Contact The Author Of This Project
e-mail: A.J.Martire@gmail.com
