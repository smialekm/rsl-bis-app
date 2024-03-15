import { useReducer } from "react";
import { AppState, ScreenId } from "../viewmodel/ViewModel";
import { VMainMenu } from "./view/VMainMenu";
import { VClientSearchForm } from "./view/VClientSearchForm";
import { VClientWindow } from "./view/VClientWindow";
import { VErrorMessage } from "./view/VErrorMessage";
import { VClientListForm } from "./view/VClientListForm";
import { PMainMenu } from "./view/PMainMenu";
import { PClientSearchForm } from "./view/PClientSearchForm";
import { PClientWindow } from "./view/PClientWindow";
import { PErrorMessage } from "./view/PErrorMessage";
import { PClientListForm } from "./view/PClientListForm";
import { UCStart } from "../usecases/UCStart";
import { UCFindClient } from "../usecases/UCFindClient";
import { UCAddClient } from "../usecases/UCAddClient";
import { UCShowClientList } from "../usecases/UCShowClientList";

conts pMainMenu: PMainMenu = new PMainMenu();
conts pClientSearchForm: PClientSearchForm = new PClientSearchForm();
conts pClientWindow: PClientWindow = new PClientWindow();
conts pErrorMessage: PErrorMessage = new PErrorMessage();
conts pClientListForm: PClientListForm = new PClientListForm();

conts iRole: IRole = new RoleProxy();
conts iDefaultClientSearch: IDefaultClientSearch = new DefaultClientSearchProxy();
conts iClientSearch: IClientSearch = new ClientSearchProxy();
conts iClient: IClient = new ClientProxy();
conts iFiniteElementMethodAlgoritm: IFiniteElementMethodAlgoritm = new FiniteElementMethodAlgoritmProxy();
conts iClientList: IClientList = new ClientListProxy();
conts iRolebis: IRolebis = new RolebisProxy();

const start: UCStart = new UCStart(pMainMenu);
const findClient: UCFindClient = new UCFindClient(pClientSearchForm, pClientWindow, pErrorMessage, iRole, iDefaultClientSearch, iClientSearch, iClient, iFiniteElementMethodAlgoritm);
const addClient: UCAddClient = new UCAddClient();
const showClientList: UCShowClientList = new UCShowClientList(pClientListForm, iClientList, iRolebis);

const ucStart: UCStart = new UCStart();
function switchView(state: AppState, action: ScreenId) {
	let newState = { ...state };
	switch (action) {
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

	PMainMenu.injectGlobalUpdateView(globalUpdateView);
	PClientSearchForm.injectGlobalUpdateView(globalUpdateView);
	PClientWindow.injectGlobalUpdateView(globalUpdateView);
	PErrorMessage.injectGlobalUpdateView(globalUpdateView);
	PClientListForm.injectGlobalUpdateView(globalUpdateView);

	return (
		<div className="App">
			{ucStart.selectApplication()}
			{VMainMenu(state.screen === ScreenId.MAINMENU, pMainMenu, start, findClient, showClientList)}
			{VClientSearchForm(state.screen === ScreenId.CLIENTSEARCHFORM, pClientSearchForm, findClient)}
			{VClientWindow(state.screen === ScreenId.CLIENTWINDOW, pClientWindow, findClient)}
			{VErrorMessage(state.screen === ScreenId.ERRORMESSAGE, pErrorMessage, findClient)}
			{VClientListForm(state.screen === ScreenId.CLIENTLISTFORM, pClientListForm, showClientList, findClient, addClient)}
		</div>
	);
}
