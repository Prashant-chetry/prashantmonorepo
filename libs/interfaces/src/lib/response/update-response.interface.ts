export interface UpdateResponseDTO<T> {
	success: boolean;
	id: T;
	updatedOn: Date;
}

export type UpdateResponseDTOForUUID = UpdateResponseDTO<string>;
export type UpdateResponseDTOForINT = UpdateResponseDTO<number>;
