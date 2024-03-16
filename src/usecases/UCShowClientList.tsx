import { RoleEnum, Role, ClientList, Rolebis, RolebisEnum, ShowClientListAtA1UnionEnum } from "../../viewmodel/ViewModel";
import { PClientListForm } from "../view/presenters/PClientListForm";
import { IClientList } from "../services/IClientList";
import { IRolebis } from "../services/IRolebis";

export class UCShowClientList{
	pClientListForm: PClientListForm;

	iClientList: IClientList;
	iRolebis: IRolebis;

	returnTo?: Function;

	rolebis?: Rolebis;

	constructor(pClientListForm: PClientListForm, iClientList: IClientList, iRolebis: IRolebis) {
		this.pClientListForm = pClientListForm;
		this.iClientList = iClientList;
		this.iRolebis = iRolebis;
	}

	preconditionCheck(role: Role): boolean {
		return this.iRole.checkRole(role);
	}

	selectShowClientList(rolebis: Rolebis, returnTo?: Function) {
		if (undefined != returnTo) this.returnTo = returnTo;
		this.rolebis = rolebis;
		ClientList clientList = this.iClientList.readClientList(rolebis);
		this.pClientListForm.showClientListForm(clientList);
	}

	selectClose() {
		if (null != returnTo)
			this.returnTo(ShowClientListResultEnum.OK);
	}

	invokedAtA1(result: ShowClientListAtA1UnionEnum) {
		RolebisEnum rolebisEnum = this.iRolebis.checkRolebis(rolebis);
		if (result == "OK" && RolebisEnum.Client == rolebisEnum) {
			Client client = this.iClient.readClient(clientSearch, clientType);
			ClientList clientList = this.iClientList.readClientList(rolebis);
			this.pClientListForm.showClientListForm(clientList);
		} else if (result == "NOTOK") {
			ClientList clientList = this.iClientList.readClientList(rolebis);
			ClientList clientList = this.iClientList.readClientList(rolebis);
			this.pClientListForm.showClientListForm(clientList);
		}
	}
}