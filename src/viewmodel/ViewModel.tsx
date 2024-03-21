export enum ScreenId {
	START = "START",
	MAINMENU = "MAINMENU",
	CLIENTSEARCHFORM = "CLIENTSEARCHFORM",
	CLIENTWINDOW = "CLIENTWINDOW",
	ERRORMESSAGE = "ERRORMESSAGE",
	CLIENTLISTFORM = "CLIENTLISTFORM"
}

export enum ShowClientListResultEnum {
	OK = "OK"
}

export enum FindClientResultEnum {
	OK = "OK",
	NOTOK = "NOTOK"
}

export enum ClientSearchEnum {
	VALID = "VALID",
	INVALID = "INVALID"
}

export enum AddClientResultEnum {
	OK = "OK"
}

export enum ClientTypeEnum {

}

export enum InvokeResultEnum {
	OK = "OK"
}

export enum InvokeResultEnum {
	NOTOK = "NOTOK"
}

export class AppState {
	screen: ScreenId = ScreenId.START;
}

export class MainMenuState {
	role: Role = new Role();
}

export class Role {
}

export class DefaultClientSearch {
	name: string = "";
	age: bigint = BigInt(0);
}

export class ClientSearchFormState {
	defaultClientSearch: DefaultClientSearch = new DefaultClientSearch();
	clientSearch: ClientSearch = new ClientSearch();
}

export class ClientSearch {
	name: string = "";
	age: bigint = BigInt(0);
}

export class Client {
	name: string = "";
	age: bigint = BigInt(0);
	address: Address = new Address();
}

export class ClientWindowState {
	client: Client = new Client();
}

export class ErrorMessageState {
}

export class ClientList {
	clients: Client[] = [];
}

export class ClientType {
}

export class ClientListFormState {
	clientList: ClientList = new ClientList();
	clientType: ClientType = new ClientType();
}

export class Address {
	street: string = "";
	number: bigint = BigInt(0);
}

export type StartAt03UnionEnum = 
	ShowClientListResultEnum
	| FindClientResultEnum
	;

export type ShowClientListAtA1UnionEnum = 
	FindClientResultEnum
	| AddClientResultEnum
	;

