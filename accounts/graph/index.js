const graphql = require('graphql');

const { useORM } = require('@sashimi-js/base/db');

/**
 * Represents a user account
 */
exports.AccountType = new graphql.GraphQLObjectType({
    name: 'Account',
    uniqueKey: 'id',
    sqlTable: 'account',
    fields: () => ({
        id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
        username: { type: graphql.GraphQLString },
    }),
});

exports.queryFields = {
    account: {
        type: exports.AccountType,
        args: {
            id: { type: graphql.GraphQLID },
        },
    }
};

exports.rootValue = {
    account: useORM,
};
