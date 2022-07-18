const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "ynot6803",
    database: "pmanager",
    multipleStatements:true
});

function getItems() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM items`;
        pool.query(sql, function (err, results) {
            if (err) {
                return reject(err);
            }
            console.log('getItems: ',results)            
            return resolve(results);
        });
    });
}

module.exports = {
    getItems,
}