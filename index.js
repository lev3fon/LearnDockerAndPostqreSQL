const async { getConnection } = require('./dbConnection.js')
const async { getRequestLogModel } = require('./requestLogModel.js')
// const { Sequelize, DataTypes } = require('sequelize')
const express = require('express')
const app = express()
const port = 3000

const dbConnection = await getConnection();
const RequestLog = await getRequestLogModel(dbConnection);

app.get('/time', async (req, res) => {
    console.log('я тут')
    const now = new Date();
    await RequestLog.create({ time: now, userAgent: req.get('user-agent') });
    res.send(now);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})