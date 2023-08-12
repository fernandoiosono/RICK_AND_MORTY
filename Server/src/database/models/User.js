const { DataTypes: dtype } = require('sequelize');

module.exports = (database) => {
    database.define('Users', {
        idUser: {
            type: dtype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dtype.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: dtype.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    });
};