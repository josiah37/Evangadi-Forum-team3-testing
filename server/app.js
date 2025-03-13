const express = require("express");
const app = express();
const port = 5500;

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// for db creation
const database_creation = require("./Routes/db_creation");
app.use("/", database_creation);

// database connnection
const dbconnection = require("./db/dbConfig");
// * Importing user routes from the userRoute.js file
const userRoutes = require("./Routes/userRoute");

// console.log(userRoutes);
// * Mounting user routes middleware
// This middleware handles requests to /api/users and delegates to the routes defined in userRoutes
app.use("/api/users", userRoutes);

// just testing
// app.get("/test/server", (req, res) => {
//    res.send({ message: "server is working" });
// });


async function start() {
   try {
      const result = await dbconnection.execute("select 'test'");
      await app.listen(port);
      console.log("database connection established");
      console.log(`listening on http://localhost:${port}`);
   } catch (error) {
      console.log(error.message);
   }
}

start();
