import { RolebisEnum, Rolebis } from "../viewmodel/ViewModel";

export interface IRolebis {
	checkRolebis(rolebis: Rolebis): RolebisEnum;
}

export class RolebisProxy implements IRolebis{

	checkRolebis(rolebis: Rolebis): RolebisEnum {
		return RolebisEnum[0];
	}
}

