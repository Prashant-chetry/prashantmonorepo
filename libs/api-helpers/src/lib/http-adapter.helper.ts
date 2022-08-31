import { IHttpRequest } from "@prashantmono/interfaces"

/**
 * function for normalizing http request
 * @param req 
 * @returns 
 */
export const httpAdapter = (req: any): IHttpRequest => {
	return Object.freeze({
		body: req?.body && Object.keys((req || {}).body).length ? req.body : null,
		params: req?.params && Object.keys((req || {}).params).length ? req.params : null,
		query: req?.query && Object.keys((req || {}).query).length ? req.query : null,
		headers: req?.headers && Object.keys((req || {}).headers).length ? req.headers : null,
	})
}