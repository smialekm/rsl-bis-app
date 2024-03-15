import { useReducer } from "react";
import { ClientListFormState } from "../viewmodel/ViewModel";
import { CClientListForm } from "./controllers/CClientListForm";
import { UCShowClientList } from "../usecases/UCShowClientList";
import { UCFindClient } from "../usecases/UCFindClient";
import { UCAddClient } from "../usecases/UCAddClient";
import { PClientListForm, updateClientListForm } from "./presenters/PClientListForm";

export default function VClientListForm(
	isActive: boolean,
	pClientListForm: PClientListForm,
	showClientList: UCShowClientList,
	findClient: UCFindClient,
	addClient: UCAddClient
) {
	const emptyState: ClientListFormState = new ClientListFormState();
	const [viewState, viewUpdate] = useReducer(updateClientListForm, emptyState);

	pClientListForm.injectDataHandles(viewState, viewUpdate);

	if (!isActive) return;

	const [selectClose, selectFindClient, invokeCheckFindClient, selectAddClient] = CClientListForm(viewState, showClientList,findClient,addClient);
	return (
		<div className="ClientListForm">
			<h2>List of clients</h2>
			<h3>client list</h3>
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th>name</th>
							<th>age</th>
						</tr>
					</thead>
					<tbody>
						{viewState.clientList.clients &&
						 viewState.clientList.clients.map((value,index) => (
							<tr key={index}>
								<td>{value.name}</td>
								<td>{value.age}</td>
							</tr>
						))}
					</tbody>
				</table>

			<button
				onClick={selectClose}
			>
				Close
			</button>
			<link
				disabled={!invokeCheckFindClient}
				onClick={selectFindClient}
			>
				Find Client
			</link>
			<button
				onClick={selectAddClient}
			>
				Add Client
			</button>
		</div>
	);
}