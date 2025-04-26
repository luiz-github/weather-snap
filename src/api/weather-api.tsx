export class WeatherApi {
    private apiKey: string;
    private baseUrl: string;

    constructor() {
        this.apiKey = "fadb73083dda3bffc1adcd2ab6a4719d";
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeather(city: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}`);

        const data = await response.json();

        console.log(data);
        return data;
    }
}