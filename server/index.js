const express = require('express'); // оснастка веб сервера
const sql = require('mssql/msnodesqlv8'); // клиент для MS SQL Server


const app = express();

app.use(express.static(`src`));
// строка для подключения к базе данных.
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

const HOSTNAME = process.env.SERVER_HOST || `localhost`;
const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;
// сервер для http://localhost:8081/
const serverAddress = `http://${HOSTNAME}:${PORT}`;
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at ${serverAddress}/`);
});

app.get('/data', async function (req, res) {
    sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        let request = new sql.Request();
        request.query('select * from Sector', function (err, resp) {
            if (err) {
                console.log(err);
            };
            console.log(resp);
            res.json(resp); // результат в формате JSON
            sql.close(); // закрываем соединение с базой данных
        });
    });
});