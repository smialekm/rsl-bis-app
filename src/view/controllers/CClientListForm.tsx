import { ClientListFormState, ClientType } from "../../viewmodel/ViewModel";
import { UCShowClientList } from "../../usecases/UCShowClientList";

export function CClientListForm(
	state: ClientListFormState,
	showClientList: UCShowClientList
) {
	function selectClose() {
		let clientType: ClientType = Object.create(state.clientType);
		showClientList.selectClose(clientType);
	}

	function selectFindClient() {
		showClientList.selectFindClient(showClientList.invokedAtA1);
	}

	function selectAddClient() {
		showClientList.selectAddClient(showClientList.invokedAtA1);
	}

	return [selectClose, selectFindClient, selectAddClient];
}