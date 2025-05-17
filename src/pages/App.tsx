import Input from '../components/input/input.tsx';
import Button from '../components/button/button.tsx';
import Card from '../components/card/card.tsx';
import { useState } from 'react';
import { WeatherApi } from '../api/weather-api.tsx';

const App = () => {

    const [ weatherApi ] = useState(new WeatherApi());
    const [ searchValue, setNewSearch ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');
    const [ wIcon, setWIcon ] = useState('');

    const handleWeatherSearchByCity = async () => {
        if (searchValue != ""){
            try {
                const data = await weatherApi.getWeather(searchValue);
                setWeatherData(data);
                setNewSearch('');

                const icon = weatherApi.getWeatherIcon(`${ data.weather[0].icon }`);
                setWIcon(icon);

            } catch (error) {
                console.error('Error retriving weather data', error);
            }
        } else {
            console.log("error");
        }
    }

    return (

        <section className='flex flex-col h-screen'>
            <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 shadow-md">
                <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between relative">
                    <div className="flex items-center space-x-3 max-sm:hidden">
                        <img src="/iconWeatherSnap.svg" className="h-8" alt="Weather Logo" />
                        <span className="text-2xl font-semibold whitespace-nowrap">WeatherSnap</span>
                    </div>

                    <div className="flex justify-center sm:absolute sm:transform sm:left-1/2 sm:-translate-x-1/2 max-sm:w-full">
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
                <div>
                    <Card
                        cityName = { weatherData.name }
                        temperature = { weatherData.main.temp }
                        weatherIcon = { wIcon }
                        feelsLike = { weatherData.main.feels_like }
                        humidity = { weatherData.main.humidity }
                        windSpeed = { weatherData.wind.speed }
                        pressure = { weatherData.main.pressure }
                        tempMin = { weatherData.main.temp_min}
                        tempMax = { weatherData.main.temp_max }
                    />
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