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
const dcssbapi_1 = require("./dcssbapi");
const api = new dcssbapi_1.DCSApi("https://api.example.com");
const testNick = "YourNick";
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function runTests() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield api.getUser(testNick);
            console.log("User Data:", userData);
            const nick = userData[0].nick;
            const date = userData[0].date;
            yield delay(10);
            return;
            const topKillsData = yield api.getTopKills();
            console.log("Top Kills Data:", topKillsData);
            yield delay(10);
            const topKDRData = yield api.getTopKDR();
            console.log("Top KDR Data:", topKDRData);
            yield delay(10);
            const missilePKData = yield api.getMissilePK(nick, date);
            console.log("Missile PK Data:", missilePKData);
            yield delay(10);
            const statsData = yield api.getStats(nick, date);
            console.log("Stats Data:", statsData);
        }
        catch (error) {
            console.error("Error during tests:", error);
        }
    });
}
runTests();
