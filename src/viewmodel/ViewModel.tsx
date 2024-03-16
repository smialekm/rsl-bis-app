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

export enum RoleEnum {
	CASHIER = "CASHIER"
}

export enum ClientSearchEnum {
	VALID = "VALID",
	INVALID = "INVALID"
}

export enum AddClientResultEnum {
	OK = "OK"
}

export enum RoleEnum {
	CASHIER = "CASHIER"
}

export enum RolebisEnum {
	CLIENT = "CLIENT"
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
}

export class Role {
}

export class ClientType {
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

export class Rolebis {
}

export class ClientList {
	clients: Client[] = new [];
}

export class ClientListFormState {
	clientList: ClientList = new ClientList();
}

export class Address {
	street: string = "";
	number: bigint = BigInt(0);
}

export type StartAt02UnionEnum = 
	ShowClientListResultEnum
	| FindClientResultEnum
	;

export type ShowClientListAtA1UnionEnum = 
	FindClientResultEnum
	| AddClientResultEnum
	;

