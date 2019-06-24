# Digital Innovation Hub - Finance: front-end example

In this repository there is an easy front-end project to show to the followers of the course [Digital Innovation Hub - Finance](https://www.eventbrite.it/e/biglietti-orientarsi-al-digitale-finance-20-e-27-giugno-4-e-12-luglio-2019-62911384645?ref=estw) as an example. 

## Description of the project
The project interacts with an easy [back-end project](https://github.com/Ibbus93/dih-backend) that exposed some Google Analytics data through a RESTful web service. The application requires data about session of a website from the backend, then it shows them into a Google Chart.

## Project structure
The project is trivial and the important part of it resides into the **src/app** folder:
- **app.component.html**: it's the view of the project. It contains the structure of the web page, hence a Google Chart with the session data retrieved from the back-end;
- **app.component.ts**: it represents the controller of the application. It retrieves the data from the back-end, then it manipulates them before to send the proper data to the view;
- **app.module.ts**: import the libraries and the services needed by the application;
- **google-analytics.service.ts**: it offers a method to call the REST api service of the DIH-Backend project in order to obtain the Google Analytics session data.

## How to execute the project
First of all, clone the project:
```
git clone https://github.com/Ibbus93/dih-frontend.git
```
Then, go to the folder created and install the dipendencies. Finally, start the service:

```
cd dih-frontend/
npm install
npm start
```
The front-end will be running on [http://localhost:4200](http://localhost:4200).

## Technologies
This project is written primarily using the following technologies and libraries:

- [Angular](https://angular.io/): development platform for building mobile and desktop web applications;
- [Bootstrap](https://getbootstrap.com): CSS framework;
- [Ng2 Google Charts](https://github.com/gmazzamuto/ng2-google-charts): Angular library to create Google Charts
