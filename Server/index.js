require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const server = require('./src/server.js');
const { database } = require('./src/database/database.js')

const { handleUsers, 
	handleFavorites, 
	handleCharacters } = require('./src/routes/index.js');

const { LOCALHOST_PORT } = process.env;

server.use(cors());
server.use(morgan("dev"));

server.use('/rickandmorty/users', handleUsers);
server.use('/rickandmorty/favorites', handleFavorites);
server.use('/rickandmorty/characters', handleCharacters);

database.sync({ force: true })
	.then(() => {
		server.listen(LOCALHOST_PORT, () => {
			console.log(`Server raised in port: ${LOCALHOST_PORT}`);
		});
	})
	.catch((error) => console.log(error));