module.exports = function(sequelize, DataTypes) {
    return sequelize.define('locations', {
        locationid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'locationid'
        },
        location: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'location'
        }
    })
}