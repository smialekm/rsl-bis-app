import { Role, StartAt03UnionEnum } from "../viewmodel/ViewModel";
import { PMainMenu } from "../view/presenters/PMainMenu";
import { UCFindClient } from "./UCFindClient";
import { UCShowClientList } from "./UCShowClientList";

export class UCStart{
	pMainMenu: PMainMenu;

	findClient: UCFindClient;
	showClientList: UCShowClientList;

	returnTo?: Function;

	role: Role = new Role();

	constructor(pMainMenu: PMainMenu) {
		this.pMainMenu = pMainMenu;
	}

	selectApplication(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.pMainMenu.showMainMenu();
	}

	invokedAt03(result: StartAt03UnionEnum) {
		this.pMainMenu.showMainMenu();
	}

	selectFindClient(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.findClient.selectFindClient();
	}

	selectShowClientList(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		this.showClientList.selectShowClientList();
	}
}