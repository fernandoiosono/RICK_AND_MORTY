const router = require('express').Router();
const { getCharByID } = require('../controllers/index.js');

router.get('/character/:id', (req, res) => {
    const { id } = req.params;

    console.log(id);

    try {
        const character = getCharByID(id);

        res.status(200).json(character);
    } catch(error) {
        res.status(400).json({ error: error.message });
    };
});

module.exports = router;