const Card = ({ ...props }) => {

    const cityName = props.cityName;
    const weatherIcon = props.weatherIcon;
    const temperature = Math.round(props.temperature);
    const humidity = props.humidity;
    const windSpeed = props.windSpeed;
    const pressure = props.pressure
    const minTemperature = Math.round(props.tempMin);
    const maxTemperature = Math.round(props.tempMax);
    const feelsLike = Math.round(props.feelsLike);

    return (
        <div className="flex flex-col h-full w-full p-10 bg-white border border-gray-200 rounded-lg shadow-lg gap-y-7 justify-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                Weather now in { cityName }
            </h5>

            <div className="flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:mb-6">{/* current weather */}
                <img src={ weatherIcon } className=" flex-initial" />
                <div className="font-semibold">
                    <p className="text-5xl inline tracking-tight">{ temperature }°<span className="text-3xl">F</span></p>
                </div>
            </div>

            <div className="mb-5 max-sm:hidden">
                <p className="text-center">Feels like: { feelsLike }°</p>
            </div>

            <ul className="flex flex-col">
                <li className="flex justify-between border-b border-gray-300 p-5">
                    <p>Temperature</p>
                    <div className="space-x-2">
                        <p className="inline"><span className="text-blue-900">↓</span> { minTemperature }</p>
                        <p className="inline"><span className="text-red-900">↑</span> { maxTemperature }</p>
                    </div>
                </li>
                <li className="flex justify-between border-b border-gray-300 p-5">
                    <p>Wind</p>
                    <div>
                        <p>{ windSpeed } mph</p>
                    </div>
                </li>
                <li className="flex justify-between border-b border-gray-300 p-5">
                    <p>Humidity</p>
                    <div>
                        <p>{ humidity }%</p>
                    </div>
                </li>
                <li className="flex justify-between p-5">
                    <p>Pressure</p>
                    <div>
                        <p>{ pressure } psi</p>
                    </div>
                </li>
            </ul>

        </div>

    );
};

export default Card;