//docker run --name test-pg -p 6432:5432 -e POSTGRES_USER=test-user -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=test-db -d postgres
//docker run -it --rm -p 5432:5432 --name aboba-pg -e POSTGRES_PASSWORD=12345 postgres:11


const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const app = express();
const port = 3000;

const sequelize = new Sequelize('test-db', 'test-user', '123', {
    host: "localhost", //your server
    port: 6432, //server port
    dialect: 'postgres'
});

const RequestLog = sequelize.define('RequestLog', {
    time: {
        type: DataTypes.STRING //DataTypes.DATETIME
    },
    userAgent: {
        type: DataTypes.STRING
    }
} , {
    tableName: 'RequestLogs',
    // timestamp: false //потом проверь)
})


const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('подключился');
        return true;
    } catch (error) {
        console.log(error);
        console.log('жопень');
        return false;
    }
}
// console.log(RequestLog == sequelize.models.RequestLog);

const createModel = async () => {
    if(testConnection()){
        await RequestLog.sync({alter: true});
        console.log('(пере)создал таблицу');
    }
}

createModel();

app.get('/time', async (req, res) => {
    console.log('я тут')
    const now = new Date();
    const newRequestLog = await RequestLog.create({ time: now.toString(), userAgent: req.get('user-agent') });
    await RequestLog.sync({alter: true});
    console.log('вроде добавил...');
    res.send(now);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

// const sequelize = new Sequelize('postgres://test-user:123@localhost:5432/test-db')