require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
const server = require('./src/server.js');

const { handleUsers, 
	handleFavorites, 
	handleCharacters } = require('./src/routes');

const LOCALHOST_PORT = process.env.LOCALHOST_PORT;

server.use(cors());
server.use(morgan("dev"));

server.use('/rickandmorty/user', handleUsers);
server.use('/rickandmorty/favorite', handleFavorites);
server.use('/rickandmorty/character', handleCharacters);

server.listen(LOCALHOST_PORT, () => {
	console.log(`Server raised in port: ${LOCALHOST_PORT}`);
});