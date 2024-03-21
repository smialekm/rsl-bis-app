import { Client, ClientSearch, ClientType } from "../viewmodel/ViewModel";

export interface IClient {
	readClient(clientSearch: ClientSearch, clientType: ClientType): Client;
}

export class ClientProxy implements IClient{

	readClient(clientSearch: ClientSearch, clientType: ClientType): Client {
		return new Client();
	}
}

