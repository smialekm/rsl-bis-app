import { RoleEnum, Role, DefaultClientSearch, ClientType, ClientSearchEnum, ClientSearch, FindClientResultEnum, Client } from "../viewmodel/ViewModel";
import { PClientSearchForm } from "../view/presenters/PClientSearchForm";
import { PClientWindow } from "../view/presenters/PClientWindow";
import { PErrorMessage } from "../view/presenters/PErrorMessage";
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

	returnTo?: Function;

	clientType: ClientType = new ClientType();
	clientSearch: ClientSearch = new ClientSearch();

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
		role = role;
		return this.iRole.checkRole(role) == RoleEnum.CASHIER;
	}

	selectFindClient(clientType: ClientType, returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.clientType = clientType;
		let defaultClientSearch = this.iDefaultClientSearch.readDefaultClientSearch(this.clientType);
		this.pClientSearchForm.showClientSearchForm(defaultClientSearch);
	}

	selectSearch(clientSearch: ClientSearch) {
		this.clientSearch = clientSearch;
		let clientSearchEnum = this.iClientSearch.checkClientSearch(this.clientSearch, this.clientType);
		if (ClientSearchEnum.VALID == clientSearchEnum) {
			let client = this.iClient.readClient(this.clientSearch, this.clientType);
			this.pClientWindow.showClientWindow(client);
		} else if (ClientSearchEnum.INVALID == clientSearchEnum) {
			this.pErrorMessage.showErrorMessage();
		}
	}

	selectClose() {
		this.iFiniteElementMethodAlgoritm.executeFiniteElementMethodAlgoritm(this.clientType);
		if (undefined != this.returnTo)
			this.returnTo(FindClientResultEnum.OK);
	}

	selectClose1() {
		if (undefined != this.returnTo)
			this.returnTo(FindClientResultEnum.NOTOK);
	}

	selectRepeat() {
		let client = this.iClient.readClient(this.clientSearch, this.clientType);
		this.pClientWindow.showClientWindow(client);
	}
}