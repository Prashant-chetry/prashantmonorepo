import validator from 'validator'
import { InvalidPropertyError } from './error';

/**
 * function for validating pagination params
 * @param param0 
 * @returns 
 */
export const getPagination = ({
	limit = '10',
	page = '0'
} = {}) => {
	let skip = 0, size = 0;

	if (!validator.isInt(limit)) {
		throw new InvalidPropertyError('Invalid limit')
	}

	if (!validator.isInt(page)) {
		throw new InvalidPropertyError('Invalid page')
	}

	skip = parseInt(page, 10);
	size = parseInt(limit, 10);
	skip = page ? skip * size : skip;

	return {
		skip,
		size
	}
}