import { useReducer } from "react";
import { MainMenuState } from "../viewmodel/ViewModel";
import { CMainMenu } from "./controllers/CMainMenu";
import { UCStart } from "../usecases/UCStart";
import { UCFindClient } from "../usecases/UCFindClient";
import { UCShowClientList } from "../usecases/UCShowClientList";
import { PMainMenu, updateMainMenu } from "./presenters/PMainMenu";

export default function VMainMenu(
	isActive: boolean,
	pMainMenu: PMainMenu,
	start: UCStart,
	findClient: UCFindClient,
	showClientList: UCShowClientList
) {
	const emptyState: MainMenuState = new MainMenuState();
	const [viewState, viewUpdate] = useReducer(updateMainMenu, emptyState);

	pMainMenu.injectDataHandles(viewState, viewUpdate);

	if (!isActive) return;

	const [selectFindClient, invokeCheckFindClient, selectShowClientList, invokeCheckShowClientList] = CMainMenu(viewState, start,findClient,showClientList);
	return (
		<div className="MainMenu">
		</div>
	);
}