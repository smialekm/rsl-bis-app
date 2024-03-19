import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { ClientSearchFormState, ScreenId, DefaultClientSearch } from "../../viewmodel/ViewModel";

export function updateClientSearchForm(state: ClientSearchFormState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PClientSearchForm extends PresentationDispatcher {
	state!: ClientSearchFormState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: ClientSearchFormState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showClientSearchForm(defaultClientSearch: DefaultClientSearch){
		this.state.defaultClientSearch = defaultClientSearch;
		this.gUpdateView?.(ScreenId.CLIENTSEARCHFORM);
	}
}