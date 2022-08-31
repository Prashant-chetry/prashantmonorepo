export interface IApplicationInformation {
	id: string;
	name: string;
	status: number;
	created_on: Date;
	updated_on: Date;
}

export type IApplicationList = Array<IApplicationInformation>;