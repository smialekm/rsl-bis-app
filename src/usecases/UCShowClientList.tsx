import { RoleEnum, Role, ClientList, Rolebis, ShowClientListResultEnum, RolebisEnum, ShowClientListAtA1UnionEnum } from "../viewmodel/ViewModel";
import { PClientListForm } from "../view/presenters/PClientListForm";
import { IClientList } from "../services/IClientList";
import { IRolebis } from "../services/IRolebis";

export class UCShowClientList{
	pClientListForm: PClientListForm;

	iClientList: IClientList;
	iRolebis: IRolebis;

	returnTo?: Function;

	rolebis?: Rolebis = new Rolebis();

	constructor(pClientListForm: PClientListForm, iClientList: IClientList, iRolebis: IRolebis) {
		this.pClientListForm = pClientListForm;
		this.iClientList = iClientList;
		this.iRolebis = iRolebis;
	}

	preconditionCheck(role: Role): boolean {
		return this.iRole.checkRole(role);
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