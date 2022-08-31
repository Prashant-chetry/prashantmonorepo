import { getPagination, InvalidPropertyError, responseHandler, serverErrorHandler } from "@prashantmono/api-helpers";
import { IHttpRequest } from "@prashantmono/interfaces";

export const makeApplicationEndPointHandler = ({
	applicationRepository
}) => {

	const createApplicationHandler = async (httpAdapter: IHttpRequest) => {
		let body = httpAdapter.body, result;

		if (!body) {
			throw new InvalidPropertyError('Invalid payload')
		}

		try {
			result = await applicationRepository.createApplication(body);
			return responseHandler({
				statusCode: 201,
				data: result,
			});
		} catch (error) {
			console.log(error, 'error')
			return responseHandler(serverErrorHandler(error))
		}
	}

	const getApplicationByIdHandler = async (httpAdapter: IHttpRequest) => {
		let params = httpAdapter.params, result;

		if (!params) {
			throw new InvalidPropertyError('Invalid application')
		}

		try {
			result = await applicationRepository.getApplicationById(params?.id);
			return responseHandler({
				statusCode: 201,
				data: result,
			});
		} catch (error) {
			console.log(error, 'error')
			return responseHandler(serverErrorHandler(error))
		}
	}

	const getApplicationListHandler = async (httpAdapter: IHttpRequest) => {
		let query = httpAdapter.query, result;

		if (!query) {
			throw new InvalidPropertyError('Invalid query')
		}

		try {
			query = getPagination(query);
			console.log(query, 'query')
			result = await applicationRepository.getApplicationList(query);
			return responseHandler({
				statusCode: 201,
				data: result,
			});
		} catch (error) {
			console.log(error, 'error list')
			return responseHandler(serverErrorHandler(error))
		}
	}


	return Object.freeze({
		createApplicationHandler,
		getApplicationByIdHandler,
		getApplicationListHandler
	})
}