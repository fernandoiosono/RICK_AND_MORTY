const users = require('../../utils/users.js');

const getUserAccess = (email, password) => {
    const access = users.find(user => user.email === email && user.password === password);

    return (access) ? true : false;
};

module.exports = getUserAccess;