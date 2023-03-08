const jsonServer = require('json-server');
const middleaware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleaware);
server.use(jsonServer.bodyParser);

const personData = require('../server/data/persons');

server.get('/api/persons', (req, res, next) => {
    res.status(200).send(personData.getPersons)
});

server.listen(3000, () => {
    console.log('Json server listening on port 3000')
})