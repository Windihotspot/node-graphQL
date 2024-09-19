import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
//db
import db from './db.js';

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}


// Server setup
const server = new ApolloServer({
    //typeDefs -- definitions of types of data
    typeDefs,
    //resolvers
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port:4000}
})

console.log('server ready at port', 4000)