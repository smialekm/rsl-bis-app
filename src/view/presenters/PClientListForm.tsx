import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { ClientListFormState, ScreenId, ClientList, ClientType } from "../../viewmodel/ViewModel";

export function updateClientListForm(state: ClientListFormState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PClientListForm extends PresentationDispatcher {
	state!: ClientListFormState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: ClientListFormState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showClientListForm(clientList: ClientList, clientType: ClientType){
		this.state.clientList = clientList;
		this.state.clientType = clientType;
		this.gUpdateView?.(ScreenId.CLIENTLISTFORM);
	}
}