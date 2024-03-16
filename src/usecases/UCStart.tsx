import { StartAt02UnionEnum } from "../viewmodel/ViewModel";
import { PMainMenu } from "../view/presenters/PMainMenu";

export class UCStart{
	pMainMenu: PMainMenu;

	returnTo?: Function;

	constructor(pMainMenu: PMainMenu) {
		this.pMainMenu = pMainMenu;
	}

	selectApplication(returnTo?: Function) {
		if (undefined != returnTo) this.returnTo = returnTo;
		this.pMainMenu.showMainMenu();
	}

	invokedAt02(result: StartAt02UnionEnum) {
		this.pMainMenu.showMainMenu();
	}
}