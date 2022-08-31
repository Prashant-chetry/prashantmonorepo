import { Knex } from "knex";
import { v4 as uuidV4 } from 'uuid';

import { ConflictError, InternalServerError, NotFoundError } from "@prashantmono/api-helpers";
import { CreateResponseDTOForUUID, GetResponseDTO, IApplicationInformation, ICreateApplication, ListResponseDTO } from "@prashantmono/interfaces"

export const makeApplicationRepository = ({
	connection
}: { connection: Knex }) => {
	const tableName = 'applications';

	const createApplication = async (data: ICreateApplication): Promise<CreateResponseDTOForUUID> => {
		let applicationInfo, result;

		applicationInfo = await connection.table(tableName).first('id').where({ name: data.name });

		if (applicationInfo?.id) {
			throw new ConflictError('Application already exists')
		}

		[result] = await connection.table(tableName).insert({ ...data, id: uuidV4() }, ['id', 'created_on']);
		console.log(result);

		if (!result?.id) {
			throw new InternalServerError('Failed to create application')
		}

		return {
			success: true,
			id: result.id,
			createdOn: result.created_on
		}
	}

	const getApplicationById = async (id): Promise<GetResponseDTO<IApplicationInformation>> => {
		let result;

		result = await connection.table(tableName).first('*').where({ id }).whereNotIn('status', [0]);

		if (!result?.id) {
			throw new NotFoundError('Application not found')
		}

		return {
			success: true,
			data: result
		};
	}

	const getApplicationList = async ({
		skip = 10,
		size = 0,
		listAll = false
	} = {}): Promise<ListResponseDTO<IApplicationInformation>> => {
		let result,
			count = 0,
			query = connection.table(tableName).select('*'),
			countQuery = connection.table(tableName).count({ count: '*' });

		if (!listAll) {
			query.offset(skip).limit(size);
		}

		result = await Promise.all([
			query,
			countQuery
		]);
		console.log(result, 'result')

		if (result[0]?.length) {
			count = result[1]?.[0]?.count || 0;
		}

		result = result[0];

		return {
			count,
			success: true,
			list: result || [],
		};

	}

	return Object.freeze({
		createApplication,
		getApplicationById,
		getApplicationList
	})
}