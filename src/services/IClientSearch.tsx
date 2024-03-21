import { ClientSearchEnum, ClientSearch } from "../viewmodel/ViewModel";

export interface IClientSearch {
	checkClientSearch(clientSearch: ClientSearch): ClientSearchEnum;
}

export class ClientSearchProxy implements IClientSearch{

	checkClientSearch(clientSearch: ClientSearch): ClientSearchEnum {
		return ClientSearchEnum[0];
	}
}

