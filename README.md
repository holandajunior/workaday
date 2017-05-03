# Workaday

This project is just a simple work hours management RESTful system, providing an API that intends to demonstrate CQRS (Commande Query Responsibility Segregation) principles in practice.

## Modules
It following CQRS principles, this project is divided into two main projects: command-side and query-side.
I decided to develop both modules as separated microservices to show the main goal: scalability.

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
