import Input from '../components/input/input.tsx';
import Button from '../components/button/button.tsx';
import { useState } from 'react';
import { WeatherApi } from '../api/weather-api.tsx';

const App = () => {

    const [ Weather ] = useState(new WeatherApi());
    const [ searchValue, setNewSearch ] = useState('')

    const handleWeatherSearchByCity = () => {
        console.log(searchValue);
        Weather.getWeather(searchValue);
        setNewSearch('');
    }

    return (

        <div>
            <h1>Weather App</h1>
            <p>Welcome to the Weather App!</p>

            <Input 
                inputValue={searchValue}
                inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewSearch(e.target.value)}
                inputPlaceHolder="City name"
            />
            <Button 
                name="Search"
                btnOnClick={handleWeatherSearchByCity}
            />
        </div>
    );
};

export default App;