const users = require('../utils/users.js');

const getUserAccess = (req, res) => {
    const { email, password } = req.query;

    const user = users.find(user => user.email === email && user.password === password);

    return (user)
        ? res.status(200).json({ access: true })
        : res.status(403).json({ access: false });
};

module.exports = getUserAccess;