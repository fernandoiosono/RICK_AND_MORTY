const { DataTypes: dtype } = require('sequelize');

module.exports = (database) => {
    database.define('Characters', {
        idCharacter: {
            type: dtype.INTEGER,
            primaryKey: true
        },
        name: {
            type: dtype.STRING,
            unique: true,
            allowNull: false
        },
        status: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        species: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        type: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        gender: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        origin: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        location: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        image: {
            type: dtype.STRING,
            allowNull: false,
        },
        created: {
            type: dtype.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        }
    },{
        timestamps: false
    });
};