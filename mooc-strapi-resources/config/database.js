const parse = require('pg-connection-string').parse

module.exports = ({ env }) => {
  let CMS_NAME = env('AWS_BUCKET').split('-')
  CMS_NAME.pop()
  CMS_NAME = CMS_NAME.join('-')
  const config = parse(
    env(
      'DATABASE_URL',
      'postgres://postgres:postgres@127.0.0.1:5432/mooc-strapi-template'
    )
    //pgAdmin 本地测试 database name 自动适配 (trim -mooc 后缀)
    //格式: project-name-cms

    // env(
    //   'DATABASE_URL',
    //   `postgres://postgres:password@localhost:5432/${CMS_NAME}`
    // )
  )
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
    },
  }
}
