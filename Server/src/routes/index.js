const { Router } = require('express');

const { getCharByID, 
    getUserAccess, 
    postFav, 
    deleteFav } = require('../controllers');

const router = Router();

router.get('/character/:id', getCharByID);
router.get('/login', getUserAccess);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;