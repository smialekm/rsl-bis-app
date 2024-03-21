import { MainMenuState } from "../../viewmodel/ViewModel";
import { UCStart } from "../../usecases/UCStart";

export function CMainMenu(
	state: MainMenuState,
	start: UCStart
) {
	function selectFindClient() {
		start.selectFindClient(start.invokedAt03);
	}

	function selectShowClientList() {
		start.selectShowClientList(start.invokedAt03);
	}

	return [selectFindClient, selectShowClientList];
}