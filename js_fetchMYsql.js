const mysql = require('mysql2');
let data = [];
const connection = mysql.createConnection({
        host: '89.117.188.154',
        user: 'u932299896_eduware',
        password: 'Webgen@220310',
        database: 'u932299896_sisdb'
});

connection.connect(function result(error) {
        if (error) {
                console.log("ERROR: Something Went Wrong...!\n\n", error);
        } else {
                console.log("Connection done...");
                const query = 'SELECT admno,name, fname, class, section, roll, fmob, session, active,transport FROM tbl_admission WHERE session = "2023-2024" AND active = 1';
                getData(query);
        }
});

function getData(query) {
        connection.query(query, function (error, result) {
                if (error) {
                        console.log("ERROR : Error executing query...!")
                } else {
                        for (row of result) {
                                data.push(row);
                                // console.log(row.fmob);
                        }
                        connection.end();
                }
                console.log(data);
        })
}