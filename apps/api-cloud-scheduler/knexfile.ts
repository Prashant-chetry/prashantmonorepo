import type { Knex } from 'knex';

// Update with your config settings.

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: 'pg',
//     connection: {
//       charset: 'utf8',
//       timezone: 'UTC',
//       host: '127.0.0.1',
//       port: 5432,
//       user: 'postgres',
//       password: 'postgres',
//       database: 'content_management',
//     },
//     migrations: {
//       directory: 'src/databases/migrations',
//       tableName: 'migrations',
//       // stub: 'src/databases/stubs',
//     },
//     seeds: {
//       directory: 'src/databases/seeds',
//       // stub: 'src/databases/stubs',
//     },
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password',
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//     },
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password',
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//     },
//   },
// };

// module.exports = config;
export = {
	client: 'pg',
	connection: {
		charset: 'utf8',
		timezone: 'UTC',
		host: '127.0.0.1',
		port: 5432,
		user: 'postgres',
		password: 'postgres',
		database: 'prashant_monorepo',
	},
	migrations: {
		directory: 'src/app/databases/migrations',
		tableName: 'migrations',
		// stub: 'src/databases/stubs',
	},
	seeds: {
		directory: 'src/app/databases',
		// stub: 'src/databases/stubs',
	},
}