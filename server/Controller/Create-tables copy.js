const dbConnection = require("../db/dbConfig");

// creating commnads for db
const users = `CREATE TABLE IF NOT EXISTS users (  
    userid INT(20) NOT NULL AUTO_INCREMENT,  
    username VARCHAR(20) NOT NULL UNIQUE,  
    firstname VARCHAR(20) NOT NULL,  
    lastname VARCHAR(20) NOT NULL,  
    email VARCHAR(40) NOT NULL UNIQUE,  
    password VARCHAR(100) NOT NULL,  
    PRIMARY KEY(userid)  
);  `;

const questions = `CREATE TABLE IF NOT EXISTS questions (  
    id INT(20) NOT NULL AUTO_INCREMENT,  
    questionid VARCHAR(100) NOT NULL UNIQUE,  
    user_id INT(20) NOT NULL,  
    title VARCHAR(50) NOT NULL,  
    description TEXT NOT NULL,  
    tag VARCHAR(20),
    PRIMARY KEY(id, questionid),  
    FOREIGN KEY(user_id) REFERENCES users(userid)  
);`;

const answers = `CREATE TABLE IF NOT EXISTS answers (  
    answerid INT(20) NOT NULL AUTO_INCREMENT,  
    userid INT(20) NOT NULL,  
    questionid VARCHAR(100) NOT NULL,  
    answer TEXT NOT NULL,  
    PRIMARY KEY(answerid),  
    FOREIGN KEY(questionid) REFERENCES questions(questionid),  
    FOREIGN KEY(userid) REFERENCES users(userid)  
);`;

// creating table programtically by passing a route
async function createTables(req, res) {
   try {
      await dbConnection.query(users);
      console.log("users table is created successfully");

      await dbConnection.query(questions);
      console.log("questions table is created successfully!");

      await dbConnection.query(answers);
      console.log("th e answers table created successfully");

      res.send("You have created the tables successfully! Or they have already been created.");
   } catch (err) {
      console.log("There was an error creating one or more tables", err);
      res.status(500).send("Error creating tables.");
   }
}


module.exports = createTables;
