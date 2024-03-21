import { ClientType } from "../viewmodel/ViewModel";

export interface IFiniteElementMethodAlgoritm {
	executeFiniteElementMethodAlgoritm(clientType: ClientType): bigint;
}

export class FiniteElementMethodAlgoritmProxy implements IFiniteElementMethodAlgoritm{

	executeFiniteElementMethodAlgoritm(clientType: ClientType): bigint {
		return BigInt(0);
	}
}

