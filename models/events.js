module.exports = function (sequelize, DataTypes) {
    return sequelize.define('events', {
        eventid: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'eventid'
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'title'
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'description'
        },
        categoryid: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'categoryid'
        },
        locationid: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'locationid'
        },
        commentsid: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'commentsid'
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'actionDate'
        },
    }, {
        tableName: 'events',
        timestamps: true
    })
}
