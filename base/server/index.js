const express = require('express');
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');

const { createDb, dbMiddleware } = require('../db');

exports.createServer = ({ concerns, listen }) => {
  const db = createDb();

  let queryFields = {};
  let rootValue = {};

  concerns.forEach(concern => {
    concern.db.init(db);

    queryFields = { ...queryFields, ...concern.graph.queryFields };
    rootValue = { ...rootValue, ...concern.graph.rootValue };
  });

  const server = express();

  const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'Query',
      fields: () => queryFields,
    }),
  });

  server.use(dbMiddleware(db));

  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: process.env.NODE_ENV !== 'production',
    }),
  );

  if (listen) {
    server.listen(3000);
  }

  return server;
};
