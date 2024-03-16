import { PMainMenu } from "../view/presenters/PMainMenu";

export class UCStart{
	pMainMenu: PMainMenu;

	returnTo?: Function;

	constructor(pMainMenu: PMainMenu) {
		this.pMainMenu = pMainMenu;
	}

	selectApplication(returnTo?: Function) {
		if (undefined != returnTo) this.returnTo = returnTo;
		pMainMenu.showMainMenu();
	}

	invokedAt02(result: StartAt02UnionEnum) {
		pMainMenu.showMainMenu();
	}
}