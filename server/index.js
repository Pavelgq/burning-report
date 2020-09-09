const express = require('express'); // оснастка веб сервера
const sql = require('mssql/msnodesqlv8'); // клиент для MS SQL Server
const async = require(`./utils/async`);
const bodyParser = require('body-parser');
const runQuery = require('./database/connect');
const moment = require('moment');
const asyncLib = require("async");
const socket = require('./modbus/socket');
const app = express();

app.use(express.static(`src`));
app.use(bodyParser.json());
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
// process.env.SERVER_HOST ||
const HOSTNAME =  `10.1.1.46`;
const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;
// сервер для http://localhost:8081/
const serverAddress = `http://${HOSTNAME}:${PORT}`;
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at ${serverAddress}/`);
});

app.use((req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
    //res.header('Content-Type', 'form-data')
    next();
});

app.get('/data/:name', async function (req, res) {
    sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        let request = new sql.Request();
        const params = req.query.p.split(',');
        console.log(params);
        let fields = '';
        params.forEach(element => {
            fields += `, ${req.params.name}.${element} `;
        });
        console.log(fields)
        request.query(`select TOP 200 Person.first_name, Person.last_name ${fields} from ${req.params.name}, Person WHERE ${req.params.name}.Person_ID = Person.ID Order by date DESC`, function (err, resp) {
            if (err) {
                console.log(err);
            };

            res.json(resp.recordset); // результат в формате JSON
            sql.close(); // закрываем соединение с базой данных
        });
    });
});

app.post('/report/:name', async (async (req, res) => {
    const data = await req.body;
    const dbname = req.params.name;
    
    let params;
    console.log(params);
    let fields = [];
    if (dbname == "Burning_person") {
        const mas = data.fur;
        
        mas.forEach((param, index) => {
            fields[index] = '';
            params = param.pack;
            console.log(params);
            for (let i = 0; i < 12; i++) {
                const element = params[i];
                if (element) {
                    fields[index] += `, '${element}'`;
                } else {
                    fields[index] += `, '0'`;
                }
            }
    
            fields[index] += `, '${param.furNum}'`;
            fields[index] += `, '${param.comment}'`;
        });
        console.log(fields);
    }
    else {
        params = data.pack
        for (let i = 0; i < params.length; i++) {
            const element = params[i];
            
            fields[0] += `, '${element}'`;
           
    }
}
    console.log(fields)
    let query = `select Person.ID from Person where Person.Login='${data.login}' and Person.Password='${data.password}'`;
    const answer = await runQuery(query).catch(err => {
        console.log(err);
        
    });

    if (answer.recordset.length > 0) {
        let result;
        
        for (let j = 0; j < fields.length; j++) {
            console.log('Логин и пароль верны');
            let personID = answer.recordset[0].ID;
    
            // Узнаем ID пользователя
            query = `insert ${dbname} VALUES ('${personID}', '${moment().format()}' ${fields[j]})`;
    
            console.log(query);
            result = await runQuery(query).catch(err => {
                console.log(err);
            });
            
        }
        res.json(result);
    } else {
        console.log('Логин и пароль не верны');
        res.json({
            error: 'Пользователь не найден'
        });
        // res.json({
        //     error: 'Данные неверного формата'
        // });
        //Отвечаем ошибкой
    }
}));




socket();