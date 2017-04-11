
import Hapi from 'hapi';
import Schema from './schema';

const server = new Hapi.Server();

const HOST = 'localhost';
const PORT = '9000';

server.connection({
  host: HOST,
  port: PORT
});

server.register({
  register: require('graphql-server-hapi').graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema: Schema
    }
  }
});

server.register({
  register: require('graphql-server-hapi').graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql'
    }
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});

