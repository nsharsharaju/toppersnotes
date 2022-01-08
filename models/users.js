module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        uid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'uid'
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'password'
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'name'
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'email'
        },
        role: {
            type: DataTypes.STRING(10),
            allowNull: true,
            field: 'role'
        }
    }, {
        tableName: 'users',
        timestamps: true
    })
}