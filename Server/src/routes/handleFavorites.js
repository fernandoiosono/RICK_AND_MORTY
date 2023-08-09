const router = require('express').Router();
const { postFav, deleteFav } = require('../controllers');

router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;