export interface GetResponseDTO<T> {
	success: boolean;
	data: T;
}

export interface ListResponseDTO<T> {
	success: boolean;
	list: T[];
	count: number;
}