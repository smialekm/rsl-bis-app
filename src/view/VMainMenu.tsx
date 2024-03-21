import React from "react";
import { useReducer } from "react";
import { MainMenuState } from "../viewmodel/ViewModel";
import { CMainMenu } from "./controllers/CMainMenu";
import { UCStart } from "../usecases/UCStart";
import { PMainMenu, updateMainMenu } from "./presenters/PMainMenu";

export default function VMainMenu(
	isActive: boolean,
	pMainMenu: PMainMenu,
	start: UCStart
) {
	const emptyState: MainMenuState = new MainMenuState();
	const [viewState, updateView] = useReducer(updateMainMenu, emptyState);

	pMainMenu.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectFindClient, selectShowClientList] = CMainMenu(viewState, start);
	return (
		<div className="MainMenu">
			<h2>Main menu</h2>
			<h3>role</h3>

			<button
				onClick={selectFindClient}
			>
				Find Client
			</button>
			<button
				onClick={selectShowClientList}
			>
				Show Client List
			</button>
		</div>
	);
}