import { useReducer } from "react";
import { ClientSearchFormState } from "../viewmodel/ViewModel";
import { CClientSearchForm } from "./controllers/CClientSearchForm";
import { UCFindClient } from "../usecases/UCFindClient";
import { PClientSearchForm, updateClientSearchForm } from "./presenters/PClientSearchForm";

export default function VClientSearchForm(
	isActive: boolean,
	pClientSearchForm: PClientSearchForm,
	findClient: UCFindClient
) {
	const emptyState: ClientSearchFormState = new ClientSearchFormState();
	const [viewState, viewUpdate] = useReducer(updateClientSearchForm, emptyState);

	pClientSearchForm.injectStateHandle(viewState, viewUpdate);

	if (!isActive) return;

	const [selectSearch] = CClientSearchForm(viewState, findClient);
	return (
		<div className="ClientSearchForm">
			<h2>Search for client</h2>
			<h3>default client search</h3>
				<label>name</label>
				<input
					type="text"
					value={viewState.defaultClientSearch.name}
					onChange={(e) => {
						viewState.defaultClientSearch.name = e.target.value;
						updateView("defaultClientSearch_name")
					}
				/>
				<label>age</label>
				<input
					type="text"
					value={viewState.defaultClientSearch.age}
					onChange={(e) => {
						viewState.defaultClientSearch.age = e.target.value;
						updateView("defaultClientSearch_age")
					}
				/>

			<h3>client search</h3>
				<label>name</label>
				<input
					type="text"
					value={viewState.clientSearch.name}
					onChange={(e) => {
						viewState.clientSearch.name = e.target.value;
						updateView("clientSearch_name")
					}
				/>
				<label>age</label>
				<input
					type="text"
					value={viewState.clientSearch.age}
					onChange={(e) => {
						viewState.clientSearch.age = e.target.value;
						updateView("clientSearch_age")
					}
				/>

			<link
				onClick={selectSearch}
			>
				Search
			</link>
		</div>
	);
}