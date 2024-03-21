import React from "react";
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
	const [viewState, updateView] = useReducer(updateErrorMessage, emptyState);

	pErrorMessage.injectStateHandle(viewState, updateView);

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