const  getConnection = require('./dbConnection.js')
const  getRequestLogModel = require('./requestLogModel.js')
// const { Sequelize, DataTypes } = require('sequelize')
const express = require('express')
const app = express()
const port = 3000

const dbConnection =  getConnection();

const RequestLog =  getRequestLogModel(await dbConnection);

app.get('/time', async (req, res) => {
    console.log('я тут')
    const now = new Date();
    await RequestLog.create({ time: now, userAgent: req.get('user-agent') });
    res.send(now);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})