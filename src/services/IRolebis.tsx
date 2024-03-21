import { RolebisEnum, Rolebis, ClientType } from "../viewmodel/ViewModel";

export interface IRolebis {
	checkRolebis(rolebis: Rolebis, clientType: ClientType): RolebisEnum;
}

export class RolebisProxy implements IRolebis{

	checkRolebis(rolebis: Rolebis, clientType: ClientType): RolebisEnum {
		return RolebisEnum[0];
	}
}

