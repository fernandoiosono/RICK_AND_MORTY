const { Users } = require('../../database/database.js')

const getUsers = async () => {
    const users = await Users.findAll();

    return users;
};

module.exports = getUsers;