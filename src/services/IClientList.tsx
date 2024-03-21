import { ClientList } from "../viewmodel/ViewModel";

export interface IClientList {
	readClientList(): ClientList;
}

export class ClientListProxy implements IClientList{

	readClientList(): ClientList {
		return new ClientList();
	}
}

