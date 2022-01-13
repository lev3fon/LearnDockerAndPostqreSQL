const { RequestLog } = require('./db-models/index')
const express = require('express')
const app = express()
const port = 3000

app.get('/time', async (req, res) => {
    const now = new Date()
    await RequestLog.create({ time: now, userAgent: req.get('user-agent') })
    res.send(now)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})