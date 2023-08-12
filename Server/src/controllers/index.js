const delCharacter = require('./Characters/delCharacter.js');
const getCharacters = require('./Characters/getCharacters.js');
const getCharByID = require('./Characters/getCharByID.js');
const postCharacter = require('./Characters/postCharacter.js');

const delFavorite = require('./Favorites/delFavorite.js');
const getFavorites = require('./Favorites/getFavorites.js');
const postFavorite = require('./Favorites/postFavorite.js');

const getUserAccess = require('./Users/getUserAccess.js');
const getUsers = require('./Users/getUsers.js');
const postUser = require('./Users/postUser.js');

module.exports = {
    delCharacter,
    getCharacters,
    getCharByID,
    postCharacter,
    delFavorite,
    getFavorites,
    postFavorite,
    getUserAccess,
    getUsers,
    postUser
};