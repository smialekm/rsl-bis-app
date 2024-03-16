
export class UCAddClient{
	returnTo?: Function;

	constructor() {
	}

	selectAddClient(returnTo: Function = null) {
		if (null != returnTo) this.returnTo = returnTo;
		if (null != returnTo)
			this.returnTo(AddClientResultEnum.OK);
	}
}