import { PClientListForm } from "../view/presenters/PClientListForm";
import { Rolebis } from "../viewmodel/ViewModel";
import { IClientList } from "../services/IClientList";
import { IRolebis } from "../services/IRolebis";

export class UCShowClientList{
	pClientListForm: PClientListForm;

	iClientList: IClientList;
	iRolebis: IRolebis;

	returnTo: Function = null;

	rolebis: Rolebis;

	constructor(pClientListForm: PClientListForm, iClientList: IClientList, iRolebis: IRolebis) {
		this.pClientListForm = pClientListForm;
		this.iClientList = iClientList;
		this.iRolebis = iRolebis;
	}

	preconditionCheck(role: Role): boolean {
		return iRole.checkRole(role);
	}

	selectShowClientList(rolebis: Rolebis, returnTo: Function = null) {
		if (null != returnTo) this.returnTo = returnTo;
		this.rolebis = rolebis;
		ClientList clientList = iClientList.readClientList(rolebis);
		pClientListForm.showClientListForm(clientList);
	}

	selectClose() {
		if (null != returnTo)
			this.returnTo(ShowClientListResultEnum.OK);
	}

	invokedAtA1(result: ShowClientListAtA1UnionEnum) {
		RolebisEnum rolebisEnum = iRolebis.checkRolebis(rolebis);
		if (result == "OK" && RolebisEnum.Client == rolebisEnum) {
			Client client = iClient.readClient(clientSearch, clientType);
			ClientList clientList = iClientList.readClientList(rolebis);
			pClientListForm.showClientListForm(clientList);
		} else if (result == "NOTOK") {
			ClientList clientList = iClientList.readClientList(rolebis);
			ClientList clientList = iClientList.readClientList(rolebis);
			pClientListForm.showClientListForm(clientList);
		}
	}
}