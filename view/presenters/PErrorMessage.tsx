import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { ErrorMessageState, ScreenId } from "../../viewmodel/ViewModel";

export function updateErrorMessage(state: ErrorMessageState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PErrorMessage extends PresentationDispatcher {
	state!: ErrorMessageState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: ErrorMessageState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showErrorMessage(){
		this.gUpdateView?.(ScreenId.ERRORMESSAGE);
	}
}