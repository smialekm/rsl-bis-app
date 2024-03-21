import { Client, ClientSearch } from "../viewmodel/ViewModel";

export interface IClient {
	readClient(clientSearch: ClientSearch): Client;
}

export class ClientProxy implements IClient{

	readClient(clientSearch: ClientSearch): Client {
		return new Client();
	}
}

