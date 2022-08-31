import { getKnexConnection } from "@prashantmono/api-db";
const config = require('./../../../knexfile');

export const getConnection = () => {
	return getKnexConnection(config);
}
