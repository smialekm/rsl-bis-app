import { PClientSearchForm } from "../view/presenters/PClientSearchForm";
import { PClientWindow } from "../view/presenters/PClientWindow";
import { PErrorMessage } from "../view/presenters/PErrorMessage";
import { ClientType } from "../viewmodel/ViewModel";
import { IRole } from "../services/IRole";
import { IDefaultClientSearch } from "../services/IDefaultClientSearch";
import { IClientSearch } from "../services/IClientSearch";
import { IClient } from "../services/IClient";
import { IFiniteElementMethodAlgoritm } from "../services/IFiniteElementMethodAlgoritm";

export class UCFindClient{
	pClientSearchForm: PClientSearchForm;
	pClientWindow: PClientWindow;
	pErrorMessage: PErrorMessage;

	iRole: IRole;
	iDefaultClientSearch: IDefaultClientSearch;
	iClientSearch: IClientSearch;
	iClient: IClient;
	iFiniteElementMethodAlgoritm: IFiniteElementMethodAlgoritm;

	returnTo: Function = null;

	clientType: ClientType;

	constructor(pClientSearchForm: PClientSearchForm, pClientWindow: PClientWindow, pErrorMessage: PErrorMessage, iRole: IRole, iDefaultClientSearch: IDefaultClientSearch, iClientSearch: IClientSearch, iClient: IClient, iFiniteElementMethodAlgoritm: IFiniteElementMethodAlgoritm) {
		this.pClientSearchForm = pClientSearchForm;
		this.pClientWindow = pClientWindow;
		this.pErrorMessage = pErrorMessage;
		this.iRole = iRole;
		this.iDefaultClientSearch = iDefaultClientSearch;
		this.iClientSearch = iClientSearch;
		this.iClient = iClient;
		this.iFiniteElementMethodAlgoritm = iFiniteElementMethodAlgoritm;
	}

	preconditionCheck(role: Role): boolean {
		return iRole.checkRole(role);
	}

	selectFindClient(clientType: ClientType, returnTo: Function = null) {
		if (null != returnTo) this.returnTo = returnTo;
		this.clientType = clientType;
		DefaultClientSearch defaultClientSearch = iDefaultClientSearch.readDefaultClientSearch(clientType);
		pClientSearchForm.showClientSearchForm(defaultClientSearch);
	}

	selectSearch(clientSearch: ClientSearch) {
		ClientSearchEnum clientSearchEnum = iClientSearch.checkClientSearch(clientSearch, clientType);
		if (ClientSearchEnum.Valid == clientSearchEnum) {
			Client client = iClient.readClient(clientSearch, clientType);
			pClientWindow.showClientWindow(client);
		} else if (ClientSearchEnum.Invalid == clientSearchEnum) {
			pErrorMessage.showErrorMessage();
		}
	}

	selectClose() {
		iFiniteElementMethodAlgoritm.executeFiniteElementMethodAlgoritm(clientType);
		if (null != returnTo)
			this.returnTo(FindClientResultEnum.OK);
	}

	selectClose1() {
		if (null != returnTo)
			this.returnTo(FindClientResultEnum.NOTOK);
	}

	selectRepeat() {
		Client client = iClient.readClient(clientSearch, clientType);
		pClientWindow.showClientWindow(client);
	}
}