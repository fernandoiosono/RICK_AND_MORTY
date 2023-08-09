const server = require('./src/server.js');
const router = require('./src/routes/index.js');

const cors = require('cors');
const morgan = require('morgan');

const PORT = 3001;

server.use(cors());
server.use(morgan("dev"));
server.use('/rickandmorty', router);

server.listen(PORT, () => {
	console.log(`Server raised in port: ${PORT}`);
});

////////////////////////////////////////////////////////
// server.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
// 	next();
// });

////////////////////////////////////////////////////////
// const http = require("http");
// const getCharByID = require("./controllers/getCharByID.js");

// http.createServer((req, res) => {
// 	const { url } = req;

// 	res.setHeader("Access-Control-Allow-Origin", "*");

// 	if (url.indexOf("/rickandmorty/character") !== -1) {
// 		const id = parseInt(url.split("/").pop());

// 		return getCharByID(res, id);
// 	}

// 	res.writeHead(404);
// 	res.end();
// }).listen(3001, "localhost");
