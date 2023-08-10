require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
const server = require('./src/server.js');

const { handleUsers, 
	handleFavorites, 
	handleCharacters } = require('./src/routes/index.js');

const { LOCALHOST_PORT } = process.env;

server.use(cors());
server.use(morgan("dev"));

server.use('/rickandmorty/user', handleUsers);
server.use('/rickandmorty/favorite', handleFavorites);
server.use('/rickandmorty/character', handleCharacters);

server.listen(LOCALHOST_PORT, () => {
	console.log(`Server raised in port: ${LOCALHOST_PORT}`);
});