require('dotenv').config();
const { Sequelize } = require('sequelize');
const defineUser = require('./models/User.js');
const defineFavorite = require('./models/Favorite.js');
const defineCharacter = require('./models/Character.js');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const database = new Sequelize(conn, { logging: false });

defineUser(database);
defineFavorite(database);
defineCharacter(database);

const { Users, Characters } = database.models;

Users.belongsToMany(Characters, { 
    through: "Favorites",
    foreignKey: "idUser",
    otherKey: "idCharacter",
    as: "characters"
});

Characters.belongsToMany(Users, { 
    through: "Favorites",
    foreignKey: "idCharacter",
    otherKey: "idUser",
    as: "users" 
});

module.exports = {
    database,
    ...database.models
};