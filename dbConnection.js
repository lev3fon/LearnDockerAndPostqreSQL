const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test-db', 'test-user', '123', {
    host: "localhost",
    port: 6432,
    dialect: 'postgres'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('подключился')
        return true
    } catch (error) {
        console.log(error)
        console.log('жопень')
        return false
    }
}

const getConnection = async () => {
    if( await testConnection()){
        return sequelize
    } else {
        throw new Error('Подключится не вышло')
    }
}

exports.getConnection = getConnection;