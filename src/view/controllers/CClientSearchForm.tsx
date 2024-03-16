import { ClientSearchFormState, ClientSearch } from "../../viewmodel/ViewModel";
import { UCFindClient } from "../../usecases/UCFindClient";

export function CClientSearchForm(
	state: ClientSearchFormState,
	findClient: UCFindClient
) {
	function selectSearch() {
		let clientSearch: ClientSearch = Object.create(state.clientSearch);
		findClient.selectSearch(clientSearch);
	}

	return [selectSearch];
}