/**
 * Module Dependencies
 */
const { createServer } = require("@sashimi-js/base/server");

module.exports = createServer({
  concerns: [
    require("@sashimi-js/accounts"),
    /** @🍣 concerns */
  ],
  listen: !module.parent,
});
