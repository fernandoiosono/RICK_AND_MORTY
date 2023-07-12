const json = require("./utils/data.js");
const http = require("http");

http.createServer((req, res) => {
	const { url } = req;

	res.setHeader("Access-Control-Allow-Origin", "*");

	if (url.indexOf("/character") !== -1) {
		const id = parseInt(url.split("/").pop());
        const character = json.filter((char) => char.id === id)[0];

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(character));
	}
}).listen(3001, "localhost");