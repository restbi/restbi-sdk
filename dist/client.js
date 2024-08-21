"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestBIClient = void 0;
class RestBIClient {
    constructor(serverURL) {
        this.serverURL = serverURL;
    }
    getMetadata(connection) {
        return fetch(`${this.serverURL}/metadata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(connection),
        })
            .then((response) => __awaiter(this, void 0, void 0, function* () {
            let result = yield response.json();
            if ('message' in result) {
                return Promise.reject(result);
            }
            return result;
        }))
            .catch((error) => {
            return Promise.reject(error); // Re-throw the original SQLError
        });
    }
    validateModel(model) {
        return fetch(`${this.serverURL}/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        })
            .then((response) => __awaiter(this, void 0, void 0, function* () {
            let result = yield response.json();
            if ('message' in result) {
                return Promise.reject(result);
            }
            return result;
        }))
            .catch((error) => {
            return Promise.reject(error); // Re-throw the original SQLError
        });
    }
    executeQuery(query, model) {
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
            .then((response) => __awaiter(this, void 0, void 0, function* () {
            let result = yield response.json();
            if ('message' in result) {
                return Promise.reject(result);
            }
            return result;
        }))
            .catch((error) => {
            return Promise.reject(error); // Re-throw the original SQLError
        });
    }
}
exports.RestBIClient = RestBIClient;
