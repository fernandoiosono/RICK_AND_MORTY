const router = require('express').Router();
const { getCharByID } = require('../controllers/index.js');
const errorHandler = require('../middlewares/errorHandler.js');

router.get('/:id', errorHandler(async (req, res) => {
    const { id } = req.params;
    const character = await getCharByID(id);

    res.status(200).json(character);
}));

router.post('/', errorHandler(async (req, res) => {
    const { id } = req.params;
    const character = await getCharByID(id);

    res.status(200).json(character);
}));

module.exports = router;