const sql = require('mssql/msnodesqlv8'); // клиент для MS SQL Server

const sqlConfig = {
    user: 'sa',
    password: 'Or2n7k6j',
    server: 'SERVLES\\SQLEXPRESS',
    port: 1433,
    driver: 'msnodesqlv8',
    database: 'varistor_production_db',
    options: {
       
        // "encrypt": true,
        // "enableArithAbort" : true
    }
}

async function runQuery(query) {
    const conn  = new sql.ConnectionPool(sqlConfig);
    const pool = await conn.connect();
    let request = new sql.Request(pool);
    
    // console.log(query);
    const result = request.query(query)
    sql.close(); 

    return result;
  }

module.exports = runQuery;