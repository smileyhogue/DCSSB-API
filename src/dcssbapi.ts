type User = {
    nick: string;
    date: string;
};

export class DCSApi {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async makePostRequest(endpoint: string, formData: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData),
        });

        if (!response.ok) {
            throw new Error(`Error making request to ${endpoint}. Status: ${response.status}`);
        }

        return await response.json();
    }

    public async getUser(nick: string): Promise<User[]> {
        return this.makePostRequest("/getuser", { nick });
    }

    public async getTopKills(): Promise<any> {
        const response = await fetch(`${this.baseUrl}/topkills`);
        return await response.json();
    }

    public async getTopKDR(): Promise<any> {
        const response = await fetch(`${this.baseUrl}/topkdr`);
        return await response.json();
    }

    public async getMissilePK(nick: string, date: string): Promise<any> {
        return this.makePostRequest("/missilepk", { nick, date });
    }

    public async getStats(nick: string, date: string): Promise<any> {
        return this.makePostRequest("/stats", { nick, date });
    }
}
