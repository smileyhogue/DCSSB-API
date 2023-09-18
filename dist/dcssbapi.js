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
exports.DCSApi = void 0;
class DCSApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    makePostRequest(endpoint, formData) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData),
            });
            if (!response.ok) {
                throw new Error(`Error making request to ${endpoint}. Status: ${response.status}`);
            }
            return yield response.json();
        });
    }
    getUser(nick) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makePostRequest("/getuser", { nick });
        });
    }
    getTopKills() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/topkills`);
            return yield response.json();
        });
    }
    getTopKDR() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/topkdr`);
            return yield response.json();
        });
    }
    getMissilePK(nick, date) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makePostRequest("/missilepk", { nick, date });
        });
    }
    getStats(nick, date) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makePostRequest("/stats", { nick, date });
        });
    }
}
exports.DCSApi = DCSApi;
