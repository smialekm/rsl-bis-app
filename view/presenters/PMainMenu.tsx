import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { MainMenuState, ScreenId } from "../../viewmodel/ViewModel";

export function updateMainMenu(state: MainMenuState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PMainMenu extends PresentationDispatcher {
	state!: MainMenuState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: MainMenuState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showMainMenu(){
		this.gUpdateView?.(ScreenId.MAINMENU);
	}
}