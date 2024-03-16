import { Short, ClientType } from "../viewmodel/ViewModel";

export interface IFiniteElementMethodAlgoritm {
	executeFiniteElementMethodAlgoritm(clientType: ClientType): Short;
}

export class FiniteElementMethodAlgoritmProxy implements IFiniteElementMethodAlgoritm{

	executeFiniteElementMethodAlgoritm(clientType: ClientType): Short {

	}
}

