/**
 * Unauthorized Error class
 */
export class UnauthorizedError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthorizedError);
		}
	}
}

/**
 * Invalid property error class
 */
export class InvalidPropertyError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthorizedError);
		}
	}
}

/**
 * Not found error
 */
export class NotFoundError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthorizedError);
		}
	}
}

/**
 * Internal server error class
 */
export class InternalServerError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthorizedError);
		}
	}
}

/**
 * Conflict error class
 */
export class ConflictError extends Error {
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthorizedError);
		}
	}
}