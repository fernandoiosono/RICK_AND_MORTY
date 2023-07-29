const { Router } = require('express');
const getCharByID = require('../controllers/getCharByID.js');
const getUserAccess = require('../controllers/getUserAccess.js');
const { postFav, deleteFav } = require('../controllers/handleFavorites.js');

const router = Router();

router.get('/character/:id', getCharByID);
router.get('/login', getUserAccess);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;