export class WeatherApi {
    private apiKey: string;
    private baseWeatherURL: string;
    private baseForecastURL: string;

    constructor() {
        this.apiKey = "fadb73083dda3bffc1adcd2ab6a4719d";
        this.baseWeatherURL = "https://api.openweathermap.org/data/2.5/weather";
        this.baseForecastURL = "https://api.openweathermap.org/data/2.5/forecast";
    }

    //get current weather
    async getWeather(city: string): Promise<any> {
        const response = await fetch(`${ this.baseWeatherURL }?q=${city}&units=imperial&appid=${ this.apiKey }`);

        const data = await response.json();
        return data;
    }

    // get next five days forecast
    async getForecast(city: string): Promise<any> {
        const response = await fetch(`${ this.baseForecastURL }?q=${ city }&units=imperial&appid=${ this.apiKey }`);

        const data = await response.json();
        console.log(data); // console prints the API consult response
        return data;
    }
}