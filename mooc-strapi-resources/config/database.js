const {ConnectionString} = require('connection-string');

module.exports = ({ env }) => {
  const db = new ConnectionString(env('JAWSDB_URL', 'mysql://root:root@localhost:3306/test'));
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'mysql',
          host: db.hosts[0].name,
          port: db.hosts[0].port,
          database: db.path[0],
          username: db.user,
          password: db.password,
          ssl: env.bool('DATABASE_SSL', false)
        },
        options: {}
      },
    },
  };
}