/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import applicationRouter from './app/routers/application.router'

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
	res.send({ message: 'Welcome to api-cloud-scheduler!' });
});

app.use('/api/application', applicationRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
