# appointments

Time reservation solution.
User registration is not in scope, since it's assumed that user is already registered.

Requires MongoDB

Styling done with styled-components
  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

* Backend :

`DATABASE_URL`

`=mongodb://`_localhost/ whatever else_`/appointments`

* Frontend :

`REACT_APP_BASE_URL`
  

  
## Installation

To clone the project:

```sh
 git clone https://github.com/callmegin/appointments
```
### Make sure to do this in /Frontend and /Backend folders
```sh
npm install
```
### MongoDB
```sh
npm install mongodb
```

### -
```sh
Don't forget to set .env variables :)
```


## Run Locally

To start the server

```bash
  nodemon start
```
To start frontend
```bash
  npm start
```
  
## Backend Dependencies

```
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "moment": "^2.29.1",
    "mongoose": "^5.13.7",
    "nodemon": "^2.0.12"
  }
```

  ## Frontend Dependencies
  ```
  "dependencies": {
    "@material-ui/icons": "^4.11.2",
    "@reduxjs/toolkit": "^1.6.1",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "create-react-app-rewire-styled-components": "^3.0.5",
    "date-fns": "^2.23.0",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.4",
    "react-router": "^5.2.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.0",
    "web-vitals": "^1.1.2"
  },

    "devDependencies": {
    "babel-plugin-styled-components": "^1.13.2",
    "react-app-rewired": "^2.1.8"
  }
  ```



![](https://media.giphy.com/media/Y7O3LHmhllEk/giphy.gif?cid=ecf05e4742ytav9pjimov4labzk9oa0qr766ifdqoebci99y&rid=giphy.gif&ct=g)

