const {ConnectionString} = require('connection-string');

module.exports = ({ env }) => {
  const db = new ConnectionString(env('DATABASE_URL', 'postgres://songqingsun@localhost:5432/test'));
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: db.hosts[0].name,
          port: db.hosts[0].port,
          database: db.path[0],
          username: db.user,
          password: db.password,
        },
        options: {
          ssl: false,
        },
      },
    },
  };
}