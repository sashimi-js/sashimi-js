const joinMonster = require('join-monster').default;

exports.useORM = (args, context, resolveInfo) => {
    return joinMonster(resolveInfo, context, (sql) => {
        return Promise.resolve([{ id: 'foo', username: 'bar' }]);
    });
}
