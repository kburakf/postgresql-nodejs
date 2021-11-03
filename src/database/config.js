"use strict";
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            port: '5432',
            database: 'kursatfariz',
            user: 'kursatfariz',
            password: '123456'
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
};
