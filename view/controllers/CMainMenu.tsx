import { MainMenuState, ClientType, Role, Rolebis } from "../../viewmodel/ViewModel";
import { UCStart } from "../usecases/UCStart";
import { UCFindClient } from "../usecases/UCFindClient";
import { UCShowClientList } from "../usecases/UCShowClientList";

export function CMainMenu(
	state: MainMenuState,
	start: UCStart,
	findClient: UCFindClient,
	showClientList: UCShowClientList
) {
	function selectFindClient() {
		let clientType: ClientType = Object.create(state.clientType);
		findClient.selectFindClient(clientType, start.invokedAt02);
	}

	function invokeCheckFindClient(): boolean {
		let role: Role = Object.create(state.role);
		return findClient.preconditionCheck(role);
	}

	function selectShowClientList() {
		let rolebis: Rolebis = Object.create(state.rolebis);
		showClientList.selectShowClientList(rolebis, start.invokedAt02);
	}

	function invokeCheckShowClientList(): boolean {
		let role: Role = Object.create(state.role);
		return showClientList.preconditionCheck(role);
	}

	return [selectFindClient, invokeCheckFindClient, selectShowClientList, invokeCheckShowClientList];
}