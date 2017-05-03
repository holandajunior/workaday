# Workaday

A simple RESTful application for work hours management, providing an API that intends to demonstrate CQRS (Commande Query Responsibility Segregation) principles in practice.

## Subprojects
It follows CQRS principles, so this project is divided into two main projects: command-side and query-side.
I decided to develop both modules as separated microservices to show the main goal: scalability.
The event-store module is just to own common events sent between the others two modules to communicate specific messages. Further, event-sourcing pattern can be developed into this last module.

### Query-side
This module is to provide only read-only endpoints. Here, Since tha main goal is to be scalable and high perfomance,
it was used a NoSQL database, since data normalization is not a requirement here,  NoSQL database will be served as data cache providing
high throughput

#### Endpoints

All read-only endpoints do not require authentication. There are following endpoints:
```
GET /users - get all users
GET /users/{id}/points - get all user's work hours by user id
```

### Command-side
Command-side contains all write-only endpoints. Requesting to this module requires authentication. A relational database in this layer is important, because here it is important to maintain entities' relationship. Thus, PostgreSQL database was chosen. 

#### Endpoints

Then, firstly do login and getting a token you will be able to do further requests.
```
POST /login - do login providing username and password
POST /signup - do signup providing username, email and password
```

Write-only endpoints
```
POST /points/save - add a new work hour. You must provide user id which it refers, entry hour and exit hour. Exit hour can be omitted if you want to send only entry hour.

POST /points/update/{id} - update a work hour with new entry hour or exit hour according to its id.
```

## To do

#### Tests
No kinds of test was created during this project yet. :( 

#### To improve project documentation
This project is simple. A basic MVC architecture was followed and its packages was created properly. Classes and variables names was defined according to its meaning, i hope :) . However, it must be itself well documented.

#### Frontend
A frontend demo-application to demonstrate using the API is in development.

#### Docker image
A docker image containing all application to be easy-to-use

