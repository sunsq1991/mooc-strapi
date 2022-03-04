const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  const config = parse(
    env("DATABASE_URL", "postgres://postgres:postgres@127.0.0.1:5432/mooc-strapi-template")
  );
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: env.bool('DATABASE_SSL', false),
      },
    }
  }
};
