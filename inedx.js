const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
    const now = new Date();
    res.send(now);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


const sequelize = new Sequelize('database', 'postgres', '12345', {
    host: "localhost", //your server
    port: 5432, //server port
    dialect: 'postgres'
});



const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('подключился');
    } catch (error) {
        console.log(error);
        console.log('жопень');
    }
}

testConnection();