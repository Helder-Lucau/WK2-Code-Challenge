# WEEK 2: CODE CHALLENGE

## DESCRIPTION 

### *Learning Goals*

* Implement a mini web app to practice on array iteration, DOM, Events, and Server communications.

### Introduction

For this challenge, you will be working on `Flataculties`, an app where you can vote for the cutest animal! You will use a local API and build out the frontend for our app, Flatacuties.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

## Requirements
For this project, you must:

* Have a well-written README file.
* Fetch data from a local server running JSON DB server.

## Project Setup & Pre-requisite Data
* In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
* Run this command to get the backend started: `json-server --watch db.json`
* Test your server by visiting this route in the browser:`http://localhost:3000/characters`

## Project Setup
Once you have the plan in place for the application you want to build take the following steps:

* Create a new project folder.
* Create a new GitHub repository.
* Please make sure you regularly commit to the repository.

## Project Guidelines
Your project should conform to the following set of guidelines:

### Core Deliverables
As a user, I can:

* See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
* Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details 
* When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.

### Bonus Deliverables
These bonus deliverables are here if you want an extra challenge and won't affect your score.

Make sure to commit your work to save your progress before attempting the bonus deliverables!

1. Add a reset button that resets the votes back to 0
2. Have a form for adding animals.

# Author & License
* This project code files is authored by [Helder Lucau](https://github.com/Helder-Lucau).
* Licensed under the terms of **MIT License**