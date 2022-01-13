const { Sequelize, DataTypes } = require('sequelize');

const getRequestLogModel = async (sequelize) => {

    const RequestLog = sequelize.define('RequestLog', {
        time: {
            type: DataTypes.DATE
        },
        userAgent: {
            type: DataTypes.STRING
        }
    } , {
        tableName: 'RequestLogs',
        timestamps: false
    })

    const createModel = async (RequestLog) => {
        if(testConnection()){

            try {
                await RequestLog.sync({alter: true})
            } catch (error) {
                await RequestLog.sync({force: true})
            }
            console.log('(пере)создал таблицу')
        }
    }

    await createModel()

    return RequestLog
}

exports.getRequestLogModel = getRequestLogModel;