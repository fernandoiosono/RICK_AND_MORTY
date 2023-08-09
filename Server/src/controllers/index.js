const getCharByID = require('./getCharByID.js');
const getUserAccess = require('./getUserAccess.js');
const { postFav, deleteFav } = require('./handleFavorites.js');

module.exports = {
    getCharByID,
    getUserAccess,
    postFav,
    deleteFav
};