import React from "react";
import { useReducer } from "react";
import { AppState, ScreenId } from "./viewmodel/ViewModel";
import VMainMenu from "./view/VMainMenu";
import VClientSearchForm from "./view/VClientSearchForm";
import VClientWindow from "./view/VClientWindow";
import VErrorMessage from "./view/VErrorMessage";
import VClientListForm from "./view/VClientListForm";
import { PMainMenu } from "./view/presenters/PMainMenu";
import { PClientSearchForm } from "./view/presenters/PClientSearchForm";
import { PClientWindow } from "./view/presenters/PClientWindow";
import { PErrorMessage } from "./view/presenters/PErrorMessage";
import { PClientListForm } from "./view/presenters/PClientListForm";
import { UCStart } from "./usecases/UCStart";
import { UCFindClient } from "./usecases/UCFindClient";
import { UCAddClient } from "./usecases/UCAddClient";
import { UCShowClientList } from "./usecases/UCShowClientList";
import { IDefaultClientSearch, DefaultClientSearchProxy } from "./services/IDefaultClientSearch";
import { IClientSearch, ClientSearchProxy } from "./services/IClientSearch";
import { IClient, ClientProxy } from "./services/IClient";
import { IFiniteElementMethodAlgoritm, FiniteElementMethodAlgoritmProxy } from "./services/IFiniteElementMethodAlgoritm";
import { IClientList, ClientListProxy } from "./services/IClientList";
import { IClientType, ClientTypeProxy } from "./services/IClientType";

const pMainMenu: PMainMenu = new PMainMenu();
const pClientSearchForm: PClientSearchForm = new PClientSearchForm();
const pClientWindow: PClientWindow = new PClientWindow();
const pErrorMessage: PErrorMessage = new PErrorMessage();
const pClientListForm: PClientListForm = new PClientListForm();

const iDefaultClientSearch: IDefaultClientSearch = new DefaultClientSearchProxy();
const iClientSearch: IClientSearch = new ClientSearchProxy();
const iClient: IClient = new ClientProxy();
const iFiniteElementMethodAlgoritm: IFiniteElementMethodAlgoritm = new FiniteElementMethodAlgoritmProxy();
const iClientList: IClientList = new ClientListProxy();
const iClientType: IClientType = new ClientTypeProxy();

const start: UCStart = new UCStart(pMainMenu);
const findClient: UCFindClient = new UCFindClient(pClientSearchForm, pClientWindow, pErrorMessage, iDefaultClientSearch, iClientSearch, iClient, iFiniteElementMethodAlgoritm);
const addClient: UCAddClient = new UCAddClient();
const showClientList: UCShowClientList = new UCShowClientList(pClientListForm, iClientList, iClientType, iClient);
start.findClient = findClient;
start.showClientList = showClientList;
showClientList.findClient = findClient;
showClientList.addClient = addClient;

function switchView(state: AppState, action: ScreenId) {
	let newState = { ...state };
	switch (action) {
		case ScreenId.START:
			newState.screen = ScreenId.START;
			break;
		case ScreenId.MAINMENU:
			newState.screen = ScreenId.MAINMENU;
			break;
		case ScreenId.CLIENTSEARCHFORM:
			newState.screen = ScreenId.CLIENTSEARCHFORM;
			break;
		case ScreenId.CLIENTWINDOW:
			newState.screen = ScreenId.CLIENTWINDOW;
			break;
		case ScreenId.ERRORMESSAGE:
			newState.screen = ScreenId.ERRORMESSAGE;
			break;
		case ScreenId.CLIENTLISTFORM:
			newState.screen = ScreenId.CLIENTLISTFORM;
			break;
	}
	return newState;
}
export default function App() {
	const [state, globalUpdateView] = useReducer(switchView, {
		screen: ScreenId.START,
	});

	pMainMenu.injectGlobalUpdateView(globalUpdateView);
	pClientSearchForm.injectGlobalUpdateView(globalUpdateView);
	pClientWindow.injectGlobalUpdateView(globalUpdateView);
	pErrorMessage.injectGlobalUpdateView(globalUpdateView);
	pClientListForm.injectGlobalUpdateView(globalUpdateView);


	if (state.screen === ScreenId.START) start.selectApplication();

	return (
		<div className="App">
			{VMainMenu(state.screen === ScreenId.MAINMENU, pMainMenu, start)}
			{VClientSearchForm(state.screen === ScreenId.CLIENTSEARCHFORM, pClientSearchForm, findClient)}
			{VClientWindow(state.screen === ScreenId.CLIENTWINDOW, pClientWindow, findClient)}
			{VErrorMessage(state.screen === ScreenId.ERRORMESSAGE, pErrorMessage, findClient)}
			{VClientListForm(state.screen === ScreenId.CLIENTLISTFORM, pClientListForm, showClientList)}
		</div>
	);
}
