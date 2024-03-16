import { useReducer } from "react";
import { ErrorMessageState } from "../viewmodel/ViewModel";
import { CErrorMessage } from "./controllers/CErrorMessage";
import { UCFindClient } from "../usecases/UCFindClient";
import { PErrorMessage, updateErrorMessage } from "./presenters/PErrorMessage";

export default function VErrorMessage(
	isActive: boolean,
	pErrorMessage: PErrorMessage,
	findClient: UCFindClient
) {
	const emptyState: ErrorMessageState = new ErrorMessageState();
	const [viewState, viewUpdate] = useReducer(updateErrorMessage, emptyState);

	pErrorMessage.injectDataHandles(viewState, viewUpdate);

	if (!isActive) return;

	const [selectClose, selectRepeat] = CErrorMessage(viewState, findClient);
	return (
		<div className="ErrorMessage">
			<button
				onClick={selectClose}
			>
				Close
			</button>
			<button
				onClick={selectRepeat}
			>
				Repeat
			</button>
		</div>
	);
}