import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

// Server setup
const server = new ApolloServer({
    //typeDefs -- definitions of types of data
    typeDefs,
    //resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port:4000}
})

console.log('server ready at port', 4000)