import { DCSApi } from './dcssbapi';

const api = new DCSApi("https://api.example.com");
const testNick = "YourNick";

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTests() {
    try {
        const userData = await api.getUser(testNick);
        console.log("User Data:", userData);

        const nick = userData[0].nick;
        const date = userData[0].date;

        await delay(10);
        return;
        const topKillsData = await api.getTopKills();
        console.log("Top Kills Data:", topKillsData);

        await delay(10);

        const topKDRData = await api.getTopKDR();
        console.log("Top KDR Data:", topKDRData);

        await delay(10);

        const missilePKData = await api.getMissilePK(nick, date);
        console.log("Missile PK Data:", missilePKData);

        await delay(10);

        const statsData = await api.getStats(nick, date);
        console.log("Stats Data:", statsData);
    } catch (error) {
        console.error("Error during tests:", error);
    }
}

runTests();