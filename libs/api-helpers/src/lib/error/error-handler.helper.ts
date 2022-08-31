import { ConflictError, InternalServerError, InvalidPropertyError, NotFoundError, UnauthorizedError } from "./error-class.error"

/**
 * function for handling server errors
 * @param error Error instance
 * @returns 
 */
export const serverErrorHandler = (error: Error) => {
	let errorResponse = {
		data: {
			success: false,
			errmsg: error.message
		},
		statusCode: 500,
	};

	if (error instanceof UnauthorizedError) {
		errorResponse.statusCode = 401;
	} else if (error instanceof NotFoundError) {
		errorResponse.statusCode = 404
	} else if (error instanceof InvalidPropertyError) {
		errorResponse.statusCode = 403;
	} else if (error instanceof ConflictError) {
		errorResponse.statusCode = 409;
	} else if (error instanceof InternalServerError) {
		errorResponse.statusCode = 500;
	} else {
		errorResponse.statusCode = 500;
		errorResponse.data.errmsg = 'Internal server error'
	}

	return errorResponse;
}

/**
 * function for handling UI error
 * @param error 
 * @returns 
 */
export const uiErrorHandler = (error: Error) => {
	let errorMessage = 'Something went wrong';

	if (error instanceof UnauthorizedError) {
		errorMessage = 'Unauthorized: ' + error.message || errorMessage;
	} else if (error instanceof NotFoundError) {
		errorMessage = 'Not Found: ' + error.message || errorMessage;
	} else if (error instanceof InvalidPropertyError) {
		errorMessage = 'Invalid property: ' + error.message || errorMessage;
	} else if (error instanceof ConflictError) {
		errorMessage = 'Conflict: ' + error.message || errorMessage;
	}

	return errorMessage;

}