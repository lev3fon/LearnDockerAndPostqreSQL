const {getConnection} = require('./dbConnection.js')
const {getRequestLogModel} = require('./requestLogModel.js')
const express = require('express')
const app = express()
const port = 3000

app.get('/time', async (req, res) => {
    const dbConnection = await getConnection()
    const RequestLog = await getRequestLogModel(dbConnection)
    console.log('я тут')
    const now = new Date()
    await RequestLog.create({ time: now, userAgent: req.get('user-agent') })
    res.send(now)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})