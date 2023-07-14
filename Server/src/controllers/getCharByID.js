const axios = require("axios");

const getCharByID = (res, id) => {

    const urlAPI = "https://rickandmortyapi.com/api/character/";
    let statusCode = 400, contentType = "text/plain";

    const outPromise = new Promise((resolve, reject) => {
        axios
            .get(urlAPI + id)
            .then(
                (response) => {
                    const data = response.data;
                    const obj = {
                        id: data.id,
                        name: data.name,
                        gender: data.gender,
                        species: data.species,
                        origin: data.origin,
                        location: data.location,
                        image: data.image,
                        status: data.status
                    };

                    statusCode = 200, contentType = "application/json";
                    resolve(JSON.stringify(obj));
                },
                (reason) => {
                    reject(reason.response.data.error)
                }
            )
    });

    outPromise
        .then((value) => {
            res.writeHead(statusCode, { "Content-Type": contentType });
            res.end(value);
        })
        .catch((message) => {
            res.writeHead(statusCode, { "Content-Type": contentType });
            res.end(message);
        });
};

module.exports = getCharByID;