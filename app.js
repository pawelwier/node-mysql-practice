var mysql = require('mysql');

var enteredName, enteredCity;

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

document.getElementById('formsubmit').addEventListener('click', () => {
    enteredName = document.getElementById('fullname').value;
    enteredCity = document.getElementById('cityname').value;
    
    console.log('Entered values: ' + enteredName + ', ' + enteredCity);

    var author = {fullname : enteredName, city : enteredCity}
    con.query('INSERT INTO authors SET ?', author, (err,res) => {
        if (err) throw err;

        console.log(res);
    })
    
});

con.query('SELECT fullname, city FROM authors', (err,rows) => {
    if (err) throw err;

    console.log('Data from db:');
    console.log(rows);

    rows.forEach((row) => {
        console.log(`The author ${row.fullname} lives in ${row.city}.`)
    });

});

con.end((err) => {
    console.log('Finished with grace');
});