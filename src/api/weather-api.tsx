export class WeatherApi {
    private apiKey: string;
    private baseUrl: string;

    constructor() {
        this.apiKey = "fadb73083dda3bffc1adcd2ab6a4719d";
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeather(city: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}?q=${city}&units=imperial&appid=${this.apiKey}`);
        
        const url = `${this.baseUrl}?q=${city}&units=imperial&appid=${this.apiKey}`;
        console.log(url)

        const data = await response.json();
        console.log(data); // console prints the API consult response
        return data;
    }

    getWeatherIcon(iconCode: string): string {
        const response = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        console.log(response);
        return response;
    }
}