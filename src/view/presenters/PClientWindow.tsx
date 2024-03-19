import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { ClientWindowState, ScreenId, Client } from "../../viewmodel/ViewModel";

export function updateClientWindow(state: ClientWindowState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PClientWindow extends PresentationDispatcher {
	state!: ClientWindowState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: ClientWindowState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showClientWindow(client: Client){
		this.state.this.client = this.client;
		this.gUpdateView?.(ScreenId.CLIENTWINDOW);
	}
}