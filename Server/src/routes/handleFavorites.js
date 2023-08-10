const router = require('express').Router();
const { postFavorite, delFavorite } = require('../controllers');

router.post('/fav', postFavorite);
router.delete('/fav/:id', delFavorite);

module.exports = router;