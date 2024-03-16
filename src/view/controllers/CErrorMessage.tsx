import { ErrorMessageState } from "../../viewmodel/ViewModel";
import { UCFindClient } from "../../usecases/UCFindClient";

export function CErrorMessage(
	state: ErrorMessageState,
	findClient: UCFindClient
) {
	function selectClose() {
		findClient.selectClose1();
	}

	function selectRepeat() {
		findClient.selectRepeat();
	}

	return [selectClose, selectRepeat];
}