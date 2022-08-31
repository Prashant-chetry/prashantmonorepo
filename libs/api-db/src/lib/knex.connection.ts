import knex from "knex";

/**
 * function for getting knex connection
 * @param config 
 * @returns 
 */
export const getKnexConnection = (config) => {
	return knex(config)
}