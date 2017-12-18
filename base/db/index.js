const knex = require('knex');
const joinMonster = require('join-monster').default;

exports.resolveWithORM = (args, context, resolveInfo) => {
    return joinMonster(resolveInfo, context, (sql) => {
        return context.db.raw(sql);
    });
}

exports.createDb = () => {
    return knex({
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: 'test.db',
        },
    })
};


exports.dbMiddleware = (db) => {
    return (req, res, next) => {
        req.db = db;

        next();
    }
}
