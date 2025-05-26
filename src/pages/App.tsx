import Input from '../components/input/input.tsx';
import Button from '../components/button/button.tsx';
import Card from '../components/card/card.tsx';
import CardForecast from '../components/cardForecast/cardForecast.tsx';
import "./App.css"
import { useState } from 'react';
import { WeatherApi } from '../api/weather-api.tsx';
import formatUnixTimestamp from '../utils/timeStampConverter.tsx'

const App = () => {

    const [ weatherApi ] = useState(new WeatherApi());
    const [ searchValue, setNewSearch ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');
    const [ forecastData, setForecastData ] = useState('');

    const handleWeatherSearchByCity = async () => {
        if (searchValue != ""){
            try {
                const weatherData = await weatherApi.getWeather(searchValue);
                const forecastData = await weatherApi.getForecast(searchValue);

                setWeatherData(weatherData);
                setForecastData(forecastData);

                setNewSearch('');

            } catch (error) {
                console.error('Error retriving weather data', error);
            }
        } else {
            console.log("error");
        }
    }
    
    return (
        <section className="flex flex-col h-screen">
            <nav className="bg-white border-gray-200 shadow-md">
                <div className="flex max-w-screen-xl mx-auto p-4 items-center justify-between relative">
                    <div className="flex items-center space-x-3 max-md:hidden">
                        <img src="/iconWeatherSnap.svg" className="h-8" alt="Weather Logo" />
                        <span className="text-2xl font-semibold whitespace-nowrap">WeatherSnap</span>
                    </div>

                    <div className="flex justify-center md:absolute md:transform md:left-1/2 md:-translate-x-1/2 max-md:w-full">
                        <Input
                            inputValue={searchValue}
                            inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewSearch(e.target.value)}
                            inputPlaceHolder="Search by city name"
                        />
                        <Button name="Search" btnOnClick={handleWeatherSearchByCity} />
                    </div>
                </div>
            </nav>

            {weatherData ? (
                <div className='flex gap-4 h-full p-5 max-md:flex-col'>
                    <div className='h-full max-w-md max-md:max-w-full'>
                        <Card
                        cityName={weatherData.name}
                        temperature={weatherData.main.temp}
                        weatherIcon={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        feelsLike={weatherData.main.feels_like}
                        humidity={weatherData.main.humidity}
                        windSpeed={weatherData.wind.speed}
                        pressure={weatherData.main.pressure}
                        tempMin={weatherData.main.temp_min}
                        tempMax={weatherData.main.temp_max}
                        />
                    </div>
                    <div className='grid grid-cols-3 gap-4 flex-1 max-md:grid-cols-1 max-md:grid-cols-3 max-sm:grid-cols-1'>
                        {forecastData && forecastData.list.slice(0, 6).map((item, index) => (
                            <CardForecast
                            key={ index }
                            dataTime={ formatUnixTimestamp(item.dt) }
                            temperature={ item.main.temp }
                            weatherIcon={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            humidity={item.main.humidity}
                            tempMin={item.main.temp_min}
                            tempMax={item.main.temp_max}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                
                <div className="flex-1 flex items-center justify-center ml-5 mr-5">
                    <p className="text-xl text-gray-700">Enter a city to see the weather!</p>
                </div>

            )}
        </section>
    );
};

export default App;