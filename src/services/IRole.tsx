import { RoleEnum, Role } from "../viewmodel/ViewModel";

export interface IRole {
	checkRole(role: Role): RoleEnum;
}

export class RoleProxy implements IRole{

	checkRole(role: Role): RoleEnum {

	}
}

