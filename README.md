# Access Google API using Angular 4

This is sample application to integrate Google API using Angular 4.
In this Application, I am accessing Google Drive API and got the storage information from the google Drive.
I am using ng-gapi node module to achieve this task. 

## Pre - requisite

1. Install gapi :  npm install ng-gapi

2. Get the Web Client Id from Google API Console.
    - Create/Select the project
    - Go to Credentials
    - In OAuth consent screen, type product name.
    - create )Auth Client ID credentials
        -   Select Web Application
        -   Add Authorised JavaScript origins like http://localhost:4200
    - Keep the Client ID and place it in app.module of this project.

3. Enable the Drive API in the Google API Console

## How to run this application.

1. Clone the git repository

2. Add the client id in app.module.ts file

3. Run the npm install command

4. Run the ng serve command 

## References
https://developers.google.com/drive/v3/web/quickstart/js <br>
https://developers.google.com/drive/v3/web/about-sdk <br>
https://github.com/rubenCodeforges/ng-gapi <br>
https://developers.google.com/discovery/v1/reference/apis/getRest
