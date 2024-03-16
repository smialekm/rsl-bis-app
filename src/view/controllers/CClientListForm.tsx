import { ClientListFormState, ClientType, Role } from "../../viewmodel/ViewModel";
import { UCShowClientList } from "../../usecases/UCShowClientList";
import { UCFindClient } from "../../usecases/UCFindClient";
import { UCAddClient } from "../../usecases/UCAddClient";

export function CClientListForm(
	state: ClientListFormState,
	showClientList: UCShowClientList,
	findClient: UCFindClient,
	addClient: UCAddClient
) {
	function selectClose() {
		showClientList.selectClose();
	}

	function selectFindClient() {
		let clientType: ClientType = Object.create(state.clientType);
		findClient.selectFindClient(clientType, showClientList.invokedAtA1);
	}

	function invokeCheckFindClient(): boolean {
		let role: Role = Object.create(state.role);
		return findClient.preconditionCheck(role);
	}

	function selectAddClient() {
		addClient.selectAddClient(showClientList.invokedAtA1);
	}

	return [selectClose, selectFindClient, invokeCheckFindClient, selectAddClient];
}