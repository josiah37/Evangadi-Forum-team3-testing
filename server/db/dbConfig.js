const mysql2 = require("mysql2");

// creating mysql connection
const dbConnection = mysql2.createPool({
   user: "evangadi-admin",
   database: "evangadi-db",
   host: "localhost",
   password: "123456",
   connectionLimit: 13,
});

// connect to mysql database
// dbConnection.execute("select 'working perfectly!!'", (err, result) => {
//    if (err) {
//       console.log(err.message);
//    } else {
//       console.log(result);
//    }
// });

module.exports = dbConnection.promise();
