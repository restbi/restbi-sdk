import { Query, Model, SQLResult, SQLError, Table, Connection, ValidationResult } from "./types";

export class RestBIClient {
    private serverURL: string;

    constructor(serverURL: string) {
        this.serverURL = serverURL;
    }
    public getMetadata(connection: Connection): Promise<Table[]> {
        return fetch(`${this.serverURL}/metadata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(connection),
        })
        .then(async (response) => {
            let result = await response.json() as Table[] | SQLError;
            if ('message' in result) {
                return Promise.reject(result as SQLError);
            }
            return result as Table[];
        })
        .catch((error) => {
            return Promise.reject(error); // Re-throw the original SQLError
        });
    }

    public validateModel(model: Model): Promise<ValidationResult> {
        return fetch(`${this.serverURL}/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        })
        .then(async (response) => {
            let result = await response.json() as ValidationResult | SQLError;
            if ('message' in result) {
                return Promise.reject(result as SQLError);
            }
            return result as ValidationResult;
        })
        .catch((error) => {
            return Promise.reject(error); // Re-throw the original SQLError
        });
    }
    public executeQuery(query: Query, model: Model): Promise<SQLResult> {
        return fetch(`${this.serverURL}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                model: model,
            }),
        })
        .then(async (response) => {
            let result = await response.json() as SQLResult | SQLError;
            if ('message' in result) {
                return Promise.reject(result as SQLError);
            }
            return result as SQLResult;
        })
        .catch((error) => {
            return Promise.reject(error); // Re-throw the original SQLError
        });
    }
}
