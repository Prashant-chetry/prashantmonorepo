import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('applications', (table) => {
		table.uuid('id').primary().notNullable();
		table.string('name', 100);
		table.integer("status").defaultTo(1);
		table.timestamp("created_on", { precision: 6 }).defaultTo(knex.fn.now(6));
		table.timestamp("updated_on", { precision: 6 }).defaultTo(knex.fn.now(6));
	})
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('applications')
}

