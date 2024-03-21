import React from "react";
import { useReducer } from "react";
import { ClientWindowState } from "../viewmodel/ViewModel";
import { CClientWindow } from "./controllers/CClientWindow";
import { UCFindClient } from "../usecases/UCFindClient";
import { PClientWindow, updateClientWindow } from "./presenters/PClientWindow";

export default function VClientWindow(
	isActive: boolean,
	pClientWindow: PClientWindow,
	findClient: UCFindClient
) {
	const emptyState: ClientWindowState = new ClientWindowState();
	const [viewState, updateView] = useReducer(updateClientWindow, emptyState);

	pClientWindow.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectClose] = CClientWindow(viewState, findClient);
	return (
		<div className="ClientWindow">
			<h2>Client data</h2>
			<h3>client</h3>
				<label>name</label>
				<input
					type="text"
					value={viewState.client.name}
					onChange={(e) => {
						viewState.client.name = e.target.value;
						updateView("client_name")
					}}
				/>
				<label>age</label>
				<input
					type="text"
					value={viewState.client.age.toString()}
					onChange={(e) => {
						viewState.client.age = BigInt(e.target.value);
						updateView("client_age")
					}}
				/>
				<h4>address</h4>
					<label>street</label>
					<input
						type="text"
						value={viewState.client.address.street}
						onChange={(e) => {
							viewState.client.address.street = e.target.value;
							updateView("client_address_street")
						}}
					/>
					<label>number</label>
					<input
						type="text"
						value={viewState.client.address.number.toString()}
						onChange={(e) => {
							viewState.client.address.number = BigInt(e.target.value);
							updateView("client_address_number")
						}}
					/>

			<button
				onClick={selectClose}
			>
				Close
			</button>
		</div>
	);
}