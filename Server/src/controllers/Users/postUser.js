const { Users } = require('../../database/database.js')

const postUser = async (user) => {
    const newUser = await Users.create(user);

    return newUser;
};

module.exports = postUser;