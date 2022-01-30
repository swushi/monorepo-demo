import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw(`
    CREATE TABLE "Users" (
      id SERIAL PRIMARY KEY, 
      name VARCHAR(255) NOT NULL, 
      created_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE "Todos" (
      id SERIAL PRIMARY KEY,
      userId INTEGER NOT NULL,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY (userId) 
        REFERENCES "Users" (id) 
          ON DELETE CASCADE
    );
  `);
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.raw(`
    DROP TABLE "Todos";
    DROP TABLE "Users";
  `)
}

