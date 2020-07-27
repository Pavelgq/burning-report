const net = require('net');
// const { strict } = require('assert');
const Buffer = require('buffer').Buffer;
const moment = require('moment');
const runQuery = require('../database/connect');
const ConvertBase = require('../utils/convert');
const client = new net.Socket();
const port = 502;
const host = '10.1.1.245';

const time = 60000; //Время интервала запросов



function generateComand(num) {
    const arr = new Uint16Array(8);
    arr[0] = num;
    arr[1] = 0x03;
    arr[2] = 0x00;
    arr[3] = 0x00;
    arr[4] = 0x00;
    arr[5] = 0x01;
    if (num == 0x04) {
        arr[6] = 0x84;
        arr[7] = 0x5F;
    }
    if (num == 0x05) {
        arr[6] = 0x85;
        arr[7] = 0x8E;
    }
    if (num == 0x06) {
        arr[6] = 0x85;
        arr[7] = 0xBD;
    }

    return arr;
}


const buffer_1 = Buffer.from(generateComand(0x04));

const buffer_2 = Buffer.from(generateComand(0x05));

const buffer_3 = Buffer.from(generateComand(0x06));

function run() {
    client.connect(port, host, function () {
        console.log('Connected');
        reqData(3);
    });
}


function reqData(num) {
    num = num + 1;
    if (num == 7) {
        num = 4;
    }

    if (num == 4) {
        client.write(buffer_1);
    }
    if (num == 5) {
        client.write(buffer_2);
    }
    if (num == 6) {
        client.write(buffer_3);
    }


}


client.on('data', function (data) {
    //parseResult(data)
    console.log('Server Says : ' + data.toString('hex'));
    const pack = data.toString('hex');

    const res = data.toString('hex')[1] * 1;
    addDataBase(pack);
    setTimeout(() => {
        console.log(res);
        reqData(res);
    }, time);

});

client.on('close', function () {
    console.log('Connection closed');
});


async function addDataBase(pack) {
    const id = pack[1];
    const data =  parseInt(pack.slice(6,10), 16).toString(10);
    console.log(id,data);
    let query = `insert Cubes VALUES ('${id}', '${moment().format()}', ${data})`;

    console.log(query);
    let result = await runQuery(query).catch(err => {
        console.log(err);
    });
    //res.json(result);
};


module.exports = run;