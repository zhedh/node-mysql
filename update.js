let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let sql = `UPDATE todos SET completed = ? WHERE id = ?`;

let data = [false, 1];

connection.query(sql, data, (err, results, fields) => {
    if (err) return console.error('error:' + err.message);
    console.log('Rows affected:', results.affectedRows);
});

connection.end();