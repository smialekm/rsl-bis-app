import { DefaultClientSearch, ClientType } from "../../viewmodel/ViewModel";

export interface IDefaultClientSearch {
	readDefaultClientSearch(clientType: ClientType): DefaultClientSearch;
}

export class DefaultClientSearchProxy implements IDefaultClientSearch{

	readDefaultClientSearch(clientType: ClientType): DefaultClientSearch {

	}
}

