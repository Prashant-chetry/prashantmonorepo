export interface CreateResponseDTO<T> {
	success: boolean;
	id: T;
	createdOn: Date;
}

export type CreateResponseDTOForUUID = CreateResponseDTO<string>;
export type CreateResponseDTOForINT = CreateResponseDTO<number>;