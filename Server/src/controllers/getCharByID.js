require('dotenv').config();

const axios = require('axios');
// const { response } = require('express');
// const urlAPI = "https://rickandmortyapi.com/api/character/";
const { URL_API_CHARACTER } = process.env;

// const getCharByID = (req, res) => {
const getCharByID = (id) => {
    // const { id } = req.params;

    console.log(URL_API_CHARACTER);

    axios(`${URL_API_CHARACTER}/${id}`)
        .then(({ data }) => {
            const { id, name, gender, species, 
                origin, location, 
                image, status } = data;

            const obj = { id, name, gender, species, 
                origin, location, 
                image, status };

            if (obj.name) return obj;
                else throw new Error('Character Not Found');

            // return obj.name 
            //     ? res.status(200).json(obj)
            //     : res.status(404).send('Character Not Found');
                
        })
        .catch((error) => {
            // res.status(500).json({ error: error.message });
            // res.status(500).send(error.message);
            throw new Error(error.message);
        })
};

// const axios = require("axios");

// const getCharByID = (res, id) => {

//     const urlAPI = "https://rickandmortyapi.com/api/character/";
//     let statusCode = 400, contentType = "text/plain";

//     const outPromise = new Promise((resolve, reject) => {
//         axios
//             .get(urlAPI + id)
//             .then(
//                 (response) => {
//                     const data = response.data;
//                     const obj = {
//                         id: data.id,
//                         name: data.name,
//                         gender: data.gender,
//                         species: data.species,
//                         origin: data.origin,
//                         location: data.location,
//                         image: data.image,
//                         status: data.status
//                     };

//                     statusCode = 200, contentType = "application/json";
//                     resolve(JSON.stringify(obj));
//                 },
//                 (reason) => {
//                     reject(reason.response.data.error)
//                 }
//             )
//     });

//     outPromise
//         .then((value) => {
//             res.writeHead(statusCode, { "Content-Type": contentType });
//             res.end(value);
//         })
//         .catch((message) => {
//             res.writeHead(statusCode, { "Content-Type": contentType });
//             res.end(message);
//         });
// };

module.exports = getCharByID;