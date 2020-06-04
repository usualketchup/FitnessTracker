# Homework_17_Fitness_Tracker

## URL Links

  1) GitHub: https://github.com/usualketchup/FitnessTracker

  2) Heroku: 

## Description

*  A fitness tracker that allows the user to create a new workout between a resistance (weights) or cardio exercise type through a 
   small form. For both exercise types, the user must fulfill each field before being able to mark that exercise as complete or adding
   that exercise to the database. The input fields that are required for the resistance exercise type are the exercise name, 
   weight (lbs), sets, reps, and duration (minutes). Whereas for the cardio exercise type, the required input fields are the name, 
   distance (miles), and duration (minutes). If the user selects the 'Complete' option, the browser will notify the user and redirects
   to the home page where the 'Last Workout' is updated to the most recent workout the user completed/added. Otherwise, if the user
   selects the 'Add Exercise' option, the browser will also notify, but the user must click on the Dashboard in the navbar, which will 
   take the user to a statistics page that contains charts/graphs based on inputs that the user typed in. From here, the user can also
   click the 'Fitness Tracker' in the navbar, which gives the Home page with the 'Last Workout' info given.  

* The fitness tracker was made through Javascript, and it follows the MVC paradigm for easier access and 
  work-flow for others that wants to see the code. There are many Javascript index.js files that are separated in different folders,
  and they overall contain variables (const/let), async & await functions, try/catch blocks, arrays/objects, require/module.exports, 
  destructuring variables and schemas. In addition, npm installation was used in order to install express for the server, mongoose to 
  create the MongoDB schemas and to provide a connection to it, and ESLint as a dev dependency to encourage good code syntax/standards.
  The application is fully deployed in Heroku with a connected MongoDB database due to mLab add-on.

## Technologies

    * Visual Studio Code
    * Node.js
    * Express (Server)
    * MongoDB (NoSQL Database) with Robo3T GUI
    * npm - Mongoose
    * npm (Dev) - ESLint 
    * GitHub
    * Heroku with mLab MongoDB add-on

## Challenges

* This fitness tracker took a lot of time to figure out on my own and I eventually learned how to utilize MongoDB properly thanks to going over some class activities and working through each problem that popped up.

