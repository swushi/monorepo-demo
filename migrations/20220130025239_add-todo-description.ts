import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw(`
    ALTER TABLE "Todos" ADD COLUMN "description" VARCHAR(255);
  `);
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.raw(`
    ALTER TABLE "Todos" DROP COLUMN "description";
  `)
}

