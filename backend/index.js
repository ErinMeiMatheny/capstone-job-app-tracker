//Things to install: npm init, express, sequelize, pg, pg-hstore, body-parser, cors (--save is not required with npm install these days)
//sequelize init (this adds the models and migrations and stuff)
//sequelize model:create --name order_history --attributes title:string
//^^That makes the models and creates the migrations that sequelize needs. Make one for each table.
import checkAuth from "./routes/authMiddleware"


const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const cors = require("cors");
app.use(cors());


// const expressSession = require("express-session");
// const SessionStore = require("express-session-sequelize")(expressSession.Store);

const cookieParser = require("cookie-parser");
const Sequelize = require("sequelize");

app.use(cookieParser());

const myDatabase = new Sequelize(

  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    password: "null"

  }
);

// const myDatabase = new Sequelize("postgres://user:localhost/8000/e-commerce");

// const sequelizeSessionStore = new SessionStore({
//   db: myDatabase,
// });

// app.use(
//   expressSession({
//     secret: process.env.SECRET_KEY || "dev",
//     store: sequelizeSessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 },
//   })
// );

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Pulls from our models so we can reference is with 'db'
const db = require("./models");

//Pulls in routes to use for sequelize
const apiRoutes = require("./routes/apiRoutes");
app.use("/", apiRoutes);

//DB Connection
require("./models/index");

//firebase

import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

export default admin

import admin from './firebase-service';

export const createUser = async (req, res) => {
const {
      email,
      phoneNumber,
      password,
      firstName,
      lastName,
      photoUrl
    } = req.body;

    const user = await admin.auth().createUser({
      email,
      phoneNumber,
      password,
      displayName: `${firstName} ${lastName}`,
      photoURL: photoUrl
    });

    return res.send(user);
}



//
db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}.`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);

  });

