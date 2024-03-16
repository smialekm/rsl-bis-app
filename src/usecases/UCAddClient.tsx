import {  } from "../viewmodel/ViewModel";

export class UCAddClient{
	returnTo: Function = new Function();

	constructor() {
	}

	selectAddClient(returnTo?: Function) {
		if (undefined != this.returnTo) this.returnTo = returnTo;
		if (null != returnTo)
			this.returnTo(AddClientResultEnum.OK);
	}
}