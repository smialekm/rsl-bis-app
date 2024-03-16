import { AddClientResultEnum } from "../viewmodel/ViewModel";

export class UCAddClient{
	returnTo?: Function;

	constructor() {
	}

	selectAddClient(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		if (undefined != this.returnTo)
			this.returnTo(AddClientResultEnum.OK);
	}
}