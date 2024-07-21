require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    dev: {
        client: 'better-sqlite3',
        connection: {
            filename: './dev.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        }
    }

}