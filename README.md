# tttTask_frontend
This prooject was done as a part of internship application at Terribly Tiny Tales. The project fetches a text file from 
[http://terriblytinytales.com/test.txt](http://terriblytinytales.com/test.txt) and after the user has entered the a number N 
in the input space provided, it shows a table containing N most frequently used words in the text along with their frequencies.
This repository deals with the frontend of the project and the backend can be found at 
[tttTask_Backend (https://github.com/mohithk100/tttTask_backend)](https://github.com/mohithk100/tttTask_backend).

The project is live and has been hosted in heroku. You can follow this [link](https://ttttask.herokuapp.com/) to visit the live
project.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing 
purposes. See deployment for notes on how to deploy the project on a live system.

1. Clone the repository.
```
$ git clone https://github.com/mohithk100/tttTask_frontend
```

2. Install all the dependencies.
   - Using yarn
    ```
    $ cd tttTask_frontend
    $ yarn install
    ````
   - Using npm
    ```
    $ cd tttTask_frontend
    $ npm install
    ```
    
3. Running the development server
   - Using yarn
     ```
     $ yarn start
     ```
   - Using npm 
     ```
     $ npm start
     ```


## Prerequisites
The following technologies should be installed on the system before starting with the development.
* [Nodejs](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) 
* [yarn](https://yarnpkg.com/en/)

## Built With
* [React JS](https://reactjs.org/) (Frontend)
* [Node JS/Express Framework](https://nodejs.org/en/) (Backend)
* [Materialize CSS](http://materializecss.com/) (Css Library)
* [Axios](https://github.com/axios/axios) (for handling HHTP requests)
* [Heorku](https://www.heroku.com/) (for deploying the project)

## Understanding the project

1. The project basically consists of 4 major components: 
* **The Input Component:** This component is responsible for rendering and handling the input process. As soon as one enters data 
the state of the component changes and triggers a request to fetch the text file. The axios library helps in handling the HTTP 
requests.
* **The Table Component:** This component is responsible for rendering the word frequency table. The data fetched from the axios request
is set to the Table component's state by passing thorugh props. Based on the state the component maps the data to the table rows and
dynamically renders the table.
* **The Error Compoenent:** This component is responsible for form/input validation. It makes sures that only numeric data validated 
and also checks if N has exceeded unique number of words in the text based on the response recieved from the backend.
* **The Loader Component:** This component is engaging the screen and is rendered on the screen when axios is making a request to 
server for data. The component in rendered only for the time between the request and the response.
    
Certain extra features that were added are:
 * Form submission on clicking the enter button. 
 * designing the ttt favicon to match with the theme of the project.
 
 The understanding and working of the backend can be found [here](https://github.com/mohithk100/tttTask_backend).
 
 ## Screenshots
