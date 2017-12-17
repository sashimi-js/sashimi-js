const express = require('express');
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');

exports.createServer = ({ graph: { queryFields, rootValue }, listen }) => {
    const server = express();

    const schema = new graphql.GraphQLSchema({
        query: new graphql.GraphQLObjectType({
            name: 'Query',
            fields: () => queryFields,
        }),
    });

    server.use('/graphql', graphqlHTTP({
        schema,
        rootValue,
        graphiql: process.env.NODE_ENV !== 'production',
    }));

    if (listen) {
        server.listen(3000);
    }

    return server;
}
