// Set up MySQL connection.
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ryoohki8',
    database: 'burgers_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

// Export connection for ORM 
module.exports = connection;