const router = require('express').Router();
const { getUsers, getUserAccess, postUser } = require('../controllers');
const errorHandler = require('../middlewares/errorHandler.js');

router.get('/all', errorHandler(async (req, res) => {
    const users = await getUsers();

    res.status(200).json({ users: users });
}));

router.get('/access', errorHandler((req, res) => {
    const { email, password } = req.query;
    const access = getUserAccess(email, password);

    res.status(200).json({ access: access });
}));

router.post('/user', errorHandler(async (req, res) => {
    const { email, password } = req.body;
    const newUser = await postUser({ email, password });

    res.status(200).json(newUser);
}));

module.exports = router;