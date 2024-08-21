import { Query, Model, SQLResult, Table, Connection } from "./types";
export declare class RestBIClient {
    private serverURL;
    constructor(serverURL: string);
    getMetadata(connection: Connection): Promise<Table[]>;
    validateModel(model: Model): Promise<Model>;
    executeQuery(query: Query, model: Model): Promise<SQLResult>;
}
//# sourceMappingURL=client.d.ts.map