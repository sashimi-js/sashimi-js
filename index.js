/**
 * Module Dependencies
 */
const { createServer } = require('@sashimi-js/base/server');

module.exports = createServer({
    graph: {
        queryFields: {
            ...require('@sashimi-js/accounts/graph').queryFields,
            /** @🍣 queryFields */
        },
        rootValue: {
            ...require('@sashimi-js/accounts/graph').rootValue,
            /** @🍣 rootValue */
        },
    },
    listen: !module.parent,
});
