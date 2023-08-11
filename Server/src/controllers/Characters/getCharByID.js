require('dotenv').config();

const axios = require('axios');
const { URL_API_CHARACTER } = process.env;

const getCharByID = async (pID) => {
    const { data } = await axios(`${URL_API_CHARACTER}/${pID}`);

    const { name, gender, species, 
        origin: { name: origin }, 
        location: { name: location }, 
        image, status } = data;

    const obj = { id: pID, name, gender, species, 
        origin, location, 
        image, status };

    if (name) return obj;
};

module.exports = getCharByID;