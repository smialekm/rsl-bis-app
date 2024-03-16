import {  } from "../../viewmodel/ViewModel";

export class UCAddClient{
	returnTo?: Function;

	constructor() {
	}

	selectAddClient(returnTo?: Function) {
		if (undefined != returnTo) this.returnTo = returnTo;
		if (null != returnTo)
			this.returnTo(AddClientResultEnum.OK);
	}
}