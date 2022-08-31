import * as express from 'express';

import { httpAdapter } from '@prashantmono/api-helpers';
import { makeApplicationEndPointHandler } from '../controllers/application.controller';
import { getConnection } from '../databases/index.database';
import { makeApplicationRepository } from '../repositories/application.repository';

const router = express.Router();
const knexConnection = getConnection();
const applicationRepository = makeApplicationRepository({
	connection: knexConnection
});

const {
	createApplicationHandler,
	getApplicationByIdHandler,
	getApplicationListHandler
} = makeApplicationEndPointHandler({
	applicationRepository
})

router.post('/create', (req, res) => {
	const httpRequestAdapter = httpAdapter(req);
	createApplicationHandler(httpRequestAdapter)
		.then(({ statusCode, data, headers }) => {
			res.set(headers).status(statusCode).json(data);
		}).catch((e) => {
			console.log(e, 'error router')
			res
				.set({
					'Content-Type': 'application/json'
				})
				.status(500)
				.json({ success: false, errmsg: 'Failed to create application' })
		});
});
router.get('/list_application', (req, res) => {
	const httpRequestAdapter = httpAdapter(req);
	console.log(httpRequestAdapter, 'httpRequestAdapter')
	getApplicationListHandler(httpRequestAdapter)
		.then(({ headers, statusCode, data }) => {
			res.set(headers).status(statusCode).json(data);
		}).catch((e) => {
			res.set({
				'Content-Type': 'application/json'
			}).status(500).json({ success: false, errmsg: 'Failed to get application' })

		})
})

router.get('/:id', (req, res) => {
	const httpRequestAdapter = httpAdapter(req);
	getApplicationByIdHandler(httpRequestAdapter)
		.then(({ headers, statusCode, data }) => {
			res.set(headers).status(statusCode).json(data);
		}).catch((e) => {
			res.set({
				'Content-Type': 'application/json'
			}).status(500).json({ success: false, errmsg: 'Failed to create application' })

		})
})


export default router;