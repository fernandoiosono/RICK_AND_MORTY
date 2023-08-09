const router = require('express').Router();
const { getUserAccess } = require('../controllers/index.js');

router.get('/login', getUserAccess);

module.exports = router;