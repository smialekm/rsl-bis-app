export enum ScreenId = {
	MAINMENU = "MAINMENU",
	CLIENTSEARCHFORM = "CLIENTSEARCHFORM",
	CLIENTWINDOW = "CLIENTWINDOW",
	ERRORMESSAGE = "ERRORMESSAGE",
	CLIENTLISTFORM = "CLIENTLISTFORM"
}

export enum ShowClientListResultEnum = {
	OK = "OK"
}

export enum FindClientResultEnum = {
	OK = "OK",
	NOTOK = "NOTOK"
}

export enum RoleEnum = {
	CASHIER = "CASHIER"
}

export enum ClientSearchEnum = {
	VALID = "VALID",
	INVALID = "INVALID"
}

export enum AddClientResultEnum = {
	OK = "OK"
}

export enum RoleEnum = {
	CASHIER = "CASHIER"
}

export enum RolebisEnum = {
	CLIENT = "CLIENT"
}

export enum InvokeResultEnum = {
	OK = "OK"
}

export enum InvokeResultEnum = {
	NOTOK = "NOTOK"
}

export type AppState = {
	screen: ScreenId;
}

export type MainMenuState = {
}

export type Role = {
}

export type ClientType = {
}

export type DefaultClientSearch = {
	name: string;
	age: bigint;
}

export type ClientSearchFormState = {
	defaultClientSearch: DefaultClientSearch;
	clientSearch: ClientSearch;
}

export type ClientSearch = {
	name: string;
	age: bigint;
}

export type Client = {
	name: string;
	age: bigint;
	address: Address;
}

export type ClientWindowState = {
	client: Client;
}

export type ErrorMessageState = {
}

export type Rolebis = {
}

export type ClientList = {
	clients: Client[];
}

export type ClientListFormState = {
	clientList: ClientList;
}

export type Address = {
	street: string;
	number: bigint;
}

export type StartAt02UnionEnum = 
	ShowClientListResultEnum
	| FindClientResultEnum
	;

export type ShowClientListAtA1UnionEnum = 
	FindClientResultEnum
	| AddClientResultEnum
	;

