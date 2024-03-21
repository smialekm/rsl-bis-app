import { DefaultClientSearch } from "../viewmodel/ViewModel";

export interface IDefaultClientSearch {
	readDefaultClientSearch(): DefaultClientSearch;
}

export class DefaultClientSearchProxy implements IDefaultClientSearch{

	readDefaultClientSearch(): DefaultClientSearch {
		return new DefaultClientSearch();
	}
}

