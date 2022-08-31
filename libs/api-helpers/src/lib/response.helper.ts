/**
 * function normalizing http response
 * @param param0 
 * @returns 
 */
export const responseHandler = ({
	statusCode,
	data,
	header
}: {
	statusCode: number,
	data: any,
	header?: any
}) => {
	let headers = header ? header : {
		'Content-Type': 'application/json'
	};

	return Object.freeze({
		headers,
		statusCode,
		data: data || {},
	})
}
