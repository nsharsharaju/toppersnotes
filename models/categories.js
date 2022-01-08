module.exports = function(sequelize, DataTypes) {
    return sequelize.define('categories', {
        categoryid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'categoryid'
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'category'
        }
    })
}