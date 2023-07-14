const http = require("http");
const getCharByID = require("./controllers/getCharByID.js");

http.createServer((req, res) => {
	const { url } = req;

	res.setHeader("Access-Control-Allow-Origin", "*");

	if (url.indexOf("/rickandmorty/character") !== -1) {
		const id = parseInt(url.split("/").pop());

		return getCharByID(res, id);
	}

	res.writeHead(404);
	res.end();
}).listen(3001, "localhost");