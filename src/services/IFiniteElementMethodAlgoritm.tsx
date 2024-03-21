import {  } from "../viewmodel/ViewModel";

export interface IFiniteElementMethodAlgoritm {
	executeFiniteElementMethodAlgoritm(): bigint;
}

export class FiniteElementMethodAlgoritmProxy implements IFiniteElementMethodAlgoritm{

	executeFiniteElementMethodAlgoritm(): bigint {
		return BigInt(0);
	}
}

