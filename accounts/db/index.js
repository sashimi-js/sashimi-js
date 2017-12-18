exports.init = async db => {
  if (!await db.schema.hasTable("account")) {
    return db.schema
      .createTable("account", table => {
        table.uuid("id").primary();
        table.string("name");
        table.string("username").unique();
        table.string("email").unique();
      })
      .then();
  }
};
