const router = require('express').Router();
const { postFavorite, delFavorite } = require('../controllers');

router.post('/favorite', postFavorite);
router.delete('/favorite/:id', delFavorite);

module.exports = router;