# Node-Application-With-Text-File-As-Database

This is a collection of APIs made using node.js and express.js
Using these APIs user can store and view data from a **```.txt```** file.

### Getting Started
To run the application on your local machine you need to have node.js installed. 
Once you have installed node.js, you can now download this repository as **```.zip```** and extract it into a folder.
After extracting, open the repository directory in a terminal / cmd and run the following command:
```
npm install
```
This should install all the dependencies needed for the application to run.

### Starting the Server
Once all the dependencies are finished installing run the following command in the terminal to start the application:
```
npm start
```
Application should now be up and running at port ```3000```.
To access the application simply open your preffered browser and type the following in the url bar:
```
http://localhost:3000
```
To stop the server press ```Ctrl + C``` on the server terminal.

## API Collection
APIs working in this application are listed as follows:

|API                               | Request      | Operation
| -------------------------------- | ------------ | ------------------------------------
|```/employee```                           | ```GET```    | Show the record of all the employees from file 
|```/employee```                   | ```POST```    | Add a new employee record to the file
|```/employee/:id```                   | ```GET```   | Show details of a specific employee