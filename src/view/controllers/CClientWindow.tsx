import { ClientWindowState } from "../../viewmodel/ViewModel";
import { UCFindClient } from "../usecases/UCFindClient";

export function CClientWindow(
	state: ClientWindowState,
	findClient: UCFindClient
) {
	function selectClose() {
		findClient.selectClose();
	}

	return [selectClose];
}