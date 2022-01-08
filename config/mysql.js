module.exports = {
    username: 'root',
    password: 'harsha123',
    database: "toppersnotes",
    dialect: "mysql",
    logging: console.log,
    timezone: "+05:30",
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool: {
        idle: 3600000,
        min: 1,
        max: 100
    },
    retry: {
        match: [
            "Deadlock found when trying to get lock; try restarting transaction",
            "Operation timeout",
            "connect ETIMEDOUT"
        ],
        max: 10
    },
    dialectOptions: {
        multipleStatements: true,
        decimalNumbers: true
    }
}