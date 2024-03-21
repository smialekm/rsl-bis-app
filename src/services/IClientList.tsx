import { ClientList, Rolebis } from "../viewmodel/ViewModel";

export interface IClientList {
	readClientList(rolebis: Rolebis): ClientList;
}

export class ClientListProxy implements IClientList{

	readClientList(rolebis: Rolebis): ClientList {
		return new ClientList();
	}
}

