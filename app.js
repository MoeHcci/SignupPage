const express = require('express');
const bodyParser = require('body-parser');
//Require the body-parser package
const request = require("request")

const app = express();
const port = 3000;
app.use(express.static("public"))
// In order for the server to serve static files like index.html or styles.css we need express.static
// Everything static like images or styles etc can be placed inside the "public" folder
app.use(bodyParser.urlencoded({
  extended: true
}));
// The following code is what is required everytime we want to use body-parser
// app.use express works with bodyParser and can use its methods of .text() or .urlencoded()
// bodyParser.urlencoded() --> is what is used when you want to parse data coming in an html form
// {extended:true} what body-parser requires us to declare
// Must be below the port = 3000



app.listen(port, function() {
  console.log("server started on port 3000")
});



app.get("/", function(req_appget_index, response_appget_index) {
  // app.get is a method provided by express and it allows our server to react when a browser attempts to access the server by making a get request
  response_appget_index.sendFile(__dirname + "/index.html"); //When we go to "/" we will be directed to /index.html
  // __dirname is used so if run the server you will be directed to the correct path of the html page

  });


app.post("/", function(req_apppost_index, res_apppost_index) {
  // The app.post handles the back end calculations. and that calculation will be Posted at / or the root of port 3000"

  console.log("The First Name is " + req_apppost_index.body.FN); //-> is used to view all all the inputs from the customer or from the POST-> body.CityName from index.html
  console.log("The Last Name is " +req_apppost_index.body.LN); //-> is used to view all all the inputs from the customer or from the POST-> body.CityName from index.html
  console.log("The First Email is " +req_apppost_index.body.E); //-> is used to view all all the inputs from the customer or from the POST-> body.CityName from index.html

      res_apppost_index.write("<p> The First Name is " + req_apppost_index.body.FN + '</p>');
      res_apppost_index.write("<p> The Last Name is " +req_apppost_index.body.LN+ '</p>');
      res_apppost_index.write("<p> The Email is " +req_apppost_index.body.E+ '</p>');

      // A single .send method all are the .write methods
      res_apppost_index.send();
    });















// Notes:
// How did I build this web application ?
// 1. I began by creating .js, .html, and .css files
// 2. I created a local machine ->
//   a. init npm
//   b. install express (to work on the back end) &
//   c. body-parser (to parse data coming from html)
//   d. request (.....)
// 3. required all the three packages in app.js then I utilized the app.listen method to listen to port 3000. Tis is before deploying the app
// 4. went to the getboostrap.com and got an idea of what I want as an example & added it to my .html sheet
// 5. To copy the styles from bootstrap I got the CDN then i click ed on <link href="signin.css" rel="stylesheet"> to get to the styles sheet of bootstrap
// 6. Pasted the copied styles in my styles.css sheet
// 7. setup the get method iun app.js to access the index.html page via server
  // Meaning:
    // app.get("/" means you will go to /index.html when u go to port3000/ or the home route
// 8. In order for the server to serve static files like index.html or styles.css we need to use -> app.use(express.static("public"))
  // Everything static like images or styles etc can be placed inside the "public" folder
// 9. Next step is to post the data we are getting in the website to data directory like "mainchimp" to post the data we must utilize "mainchimp's" API




  // Backend (js, html, css) Process steps:
  // 1. When u type app.get("/", -> you will go to "/" or root directory of port3000 and that will direct you to index.html because of sendFile(__dirname + "/index.html");
    // app.get is a method provided by express and it allows our server to react when a browser attempts to access the server by making a get request
      // app.get("/",
        // Means when we go to root of port 3000 we will go to whatever -> endFile(__dirname + "/index.html"); is which is /index.html
  // 2. Once in index.html the user will input the data. Then, based on the action & method of the form tag certain outcome will happen
  // 3. The action="/" & method= "POST" means the results will be POSTED in the "/" or root directory of port 30000
  // 4. Once the data comes back via POST method. For our server to pick it up we need an app.post method
    // The app.post handles the back end calculations. Therefore, the directory of app.post & the action in html must match
      // post.get("/",
        // Means the data will be posted at the root of port 3000 when it comes back from backend calc
        // bodyParser.urlencoded() --> is what is used when you want to parse data coming in an html form
