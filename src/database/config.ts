export = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'knex_migrations',
      extension: 'ts'
    }
  },
} as { [key: string]: object };