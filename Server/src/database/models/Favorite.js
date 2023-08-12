const { DataTypes: dtype } = require('sequelize');

module.exports = (database) => {
    database.define('Favorites', {
        idUser: {
            type: dtype.INTEGER
        },
        idCharacter: {
            type: dtype.INTEGER
        }
    },{
        timestamps: false
    });
};