import { RoleEnum, Role, ClientList, Rolebis, ShowClientListResultEnum, RolebisEnum, ShowClientListAtA1UnionEnum } from "../viewmodel/ViewModel";
import { PClientListForm } from "../view/presenters/PClientListForm";
import { IRole } from "../services/IRole";
import { IClientList } from "../services/IClientList";
import { IRolebis } from "../services/IRolebis";
import { IClient } from "../services/IClient";

export class UCShowClientList{
	pClientListForm: PClientListForm;

	iRole: IRole;
	iClientList: IClientList;
	iRolebis: IRolebis;
	iClient: IClient;

	returnTo?: Function;

	rolebis: Rolebis = new Rolebis();

	constructor(pClientListForm: PClientListForm, iRole: IRole, iClientList: IClientList, iRolebis: IRolebis, iClient: IClient) {
		this.pClientListForm = pClientListForm;
		this.iRole = iRole;
		this.iClientList = iClientList;
		this.iRolebis = iRolebis;
		this.iClient = iClient;
	}

	preconditionCheck(role: Role): boolean {
		this.role = role;
		return this.iRole.checkRole(role) == RoleEnum.CASHIER;
	}

	selectShowClientList(rolebis: Rolebis, returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.rolebis = rolebis;
		let clientList = this.iClientList.readClientList(this.rolebis);
		this.pClientListForm.showClientListForm(clientList);
	}

	selectClose() {
		if (undefined != this.returnTo)
			this.returnTo(ShowClientListResultEnum.OK);
	}

	invokedAtA1(result: ShowClientListAtA1UnionEnum) {
		this.result = result;
		let rolebisEnum = this.iRolebis.checkRolebis(rolebis);
		if (result == "OK" && RolebisEnum.CLIENT == rolebisEnum) {
			let client = this.iClient.readClient(clientSearch, this.clientType);
			let clientList = this.iClientList.readClientList(this.rolebis);
			this.pClientListForm.showClientListForm(clientList);
		} else if (result == "NOTOK") {
			let clientList = this.iClientList.readClientList(this.rolebis);
			let clientList = this.iClientList.readClientList(this.rolebis);
			this.pClientListForm.showClientListForm(clientList);
		}
	}
}