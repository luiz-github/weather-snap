import Input from '../components/input/input.tsx';
import Button from '../components/button/button.tsx';
import { useState } from 'react';
import { WeatherApi } from '../api/weather-api.tsx';

const App = () => {

    const [ Weather ] = useState(new WeatherApi());
    const [ searchValue, setNewSearch ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');

    const handleWeatherSearchByCity = async () => {
        try {
            const data = await Weather.getWeather(searchValue);
            setWeatherData(data);
            setNewSearch('');

        } catch (error) {
            console.error('Error retriving weather data', error);
        }
    }

    return (

        <div>
            <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between relative">
                    <div className="flex items-center space-x-3 max-sm:hidden">
                        <img src="/iconWeatherSnap.svg" className="h-8" alt="Weather Logo" />
                        <span className="text-2xl font-semibold whitespace-nowrap">WeatherSnap</span>
                    </div>

                    <div className="flex-1 flex justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 max-sm:w-full">
                        <div className="flex items-center w-full max-w-md px-2">
                            <Input
                            inputValue={searchValue}
                            inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setNewSearch(e.target.value)
                            }
                            inputPlaceHolder="Search city name"
                            />
                            <Button name="Search" btnOnClick={handleWeatherSearchByCity} />
                        </div>
                    </div>
                </div>
            </nav>


        <h1>Weather App</h1>
        <p>Welcome to the Weather App!</p>

        {weatherData && (
        <div>
            <h1>{weatherData.weather[0].main}</h1>
            <h2>{weatherData.weather[0].description}</h2>

        </div>
        )}


        </div>
    );
};

export default App;