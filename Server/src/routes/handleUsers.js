const router = require('express').Router();
const { getUserAccess } = require('../controllers/index.js');

router.get('/access', (req, res) => {
    const { email, password } = req.query;

    try {
        const access = getUserAccess(email, password);

        res.status(200).json({ access: access });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;