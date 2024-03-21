import { ClientList, ClientType, ShowClientListResultEnum, ClientTypeEnum, ShowClientListAtA1UnionEnum } from "../viewmodel/ViewModel";
import { PClientListForm } from "../view/presenters/PClientListForm";
import { IClientList } from "../services/IClientList";
import { IClientType } from "../services/IClientType";
import { IClient } from "../services/IClient";
import { UCFindClient } from "./UCFindClient";
import { UCAddClient } from "./UCAddClient";

export class UCShowClientList{
	pClientListForm: PClientListForm;

	iClientList: IClientList;
	iClientType: IClientType;
	iClient: IClient;

	findClient: UCFindClient;
	addClient: UCAddClient;

	returnTo?: Function;

	clientType: ClientType = new ClientType();

	constructor(pClientListForm: PClientListForm, iClientList: IClientList, iClientType: IClientType, iClient: IClient) {
		this.pClientListForm = pClientListForm;
		this.iClientList = iClientList;
		this.iClientType = iClientType;
		this.iClient = iClient;
	}

	selectShowClientList(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		let clientList = this.iClientList.readClientList();
		let clientType = this.iClientType.readClientType();
		this.pClientListForm.showClientListForm(clientList, clientType);
	}

	selectClose(clientType: ClientType) {
		this.clientType = clientType;
		if (undefined != this.returnTo)
			this.returnTo(ShowClientListResultEnum.OK);
	}

	invokedAtA1(result: ShowClientListAtA1UnionEnum) {
		let clientTypeEnum = this.iClientType.checkClientType(this.clientType);
		if (result == "OK") {
			let client = this.iClient.readClient(this.clientSearch);
			let clientList = this.iClientList.readClientList();
			let clientType = this.iClientType.readClientType();
			this.pClientListForm.showClientListForm(clientList, clientType);
		} else if (result == "NOTOK") {
			let clientList = this.iClientList.readClientList();
			let clientList = this.iClientList.readClientList();
			let clientType = this.iClientType.readClientType();
			this.pClientListForm.showClientListForm(clientList, clientType);
		}
	}

	selectFindClient(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.findClient.selectFindClient();
	}

	selectAddClient(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.addClient.selectAddClient();
	}
}