var mysql = require('mysql');

var db_result = '';

var con = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "Wezniesql1",
    database : "sitepoint"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!!!');
});


con.query('SELECT fullname, city FROM authors', (err,rows) => {
    if (err) throw err;

    console.log('Data from db:');
    console.log(rows);

    rows.forEach((row) => {
        res = `The author ${row.fullname} lives in ${row.city}.`;
    });

    db_result = res;
    console.log("db_result: " + db_result);
});

con.end((err) => {
    console.log('Finished with grace');
});

module.exports = db_result;