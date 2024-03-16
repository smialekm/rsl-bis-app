import { ClientSearchEnum, ClientSearch, ClientType } from "../viewmodel/ViewModel";

export interface IClientSearch {
	checkClientSearch(clientSearch: ClientSearch, clientType: ClientType): ClientSearchEnum;
}

export class ClientSearchProxy implements IClientSearch{

	checkClientSearch(clientSearch: ClientSearch, clientType: ClientType): ClientSearchEnum {

	}
}

