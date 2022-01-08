module.exports = function(sequelize, DataTypes) {
    return sequelize.define('comments', {
        commentid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'commentid'
        },
        comment: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'comment'
        }
    })
}