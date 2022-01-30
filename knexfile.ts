import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'todos',
      user:     'localdev',
      password: 'password'
    },
    migrations: {
      tableName: 'migrations'
    }
  },
};

module.exports = config;
