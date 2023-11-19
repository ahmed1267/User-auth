User Auth
Description
This project is a CRUD user authentication API that let you register as a user or admin for different privleages which are:
You can only Delete a user if you are that user or an admin.
You can only Patch a user if you are that user or an admin.
Also it let's you do the rest of the CRUD operations if only you are loggedIn.
All of the routes are JWTGuard protected Excpet the register.

Table of Contents

    Project Name
        Description
        Table of Contents
        Installation
        Usage
        Folder Structure
        Technologies Used
        Features
        Authentication

Installation

This project dependencies are:
Nestjs
```
$ npm i -g @nestjs/cli
```
Mongoose
```
npm install mongoose --save
```
Nest/mongoose
```
$ npm i @nestjs/mongoose mongoose
```
Passport
```
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
```
Passport-jwt
```
$ npm install --save-dev @types/passport-jwt
```
Class Transformer and Validator
```
$ npm i --save class-validator class-transformer
```
Bcrypt
```
npm i bcrypt
```



bash

# Clone the repository
git clone https://github.com/ahmed1267/User-auth.git

# Navigate to the project folder
cd user-auth

# Install dependencies
npm install

Usage

Explain how to run your application and any additional setup needed.

bash

# Run the application
npm start

Folder Structure

Describe the organization of your project's folders and key files.

lua

/project-root
|-- src
|   |-- controllers
|   |-- guards
|   |-- services
|   |-- schemas
|   |-- dto
|   |-- auth
|-- test
|-- .env
|-- .gitignore
|-- tsconfig.json
|-- package.json

Technologies Used

List the key technologies and frameworks used in your project.

    NestJS
    MongoDB
    Mongoose
    Bcrypt
    Node.Js
    TypeScript
    Passport
    JWT

Features

Highlight the main features of your application.

    User registration and authentication
    CRUD operations on user data
    JWT Authorization
    Role based privileges

User Authentication

    Local authentication using email and password
    JWT (JSON Web Token) for secure authentication
Provided a Postman collection for sample data.
