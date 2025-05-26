const CardForecast = ({ ...props }) => {
    const dataTime = props.dataTime;
    const weatherIcon = props.weatherIcon;
    const minTemperature = Math.round(props.tempMin);
    const maxTemperature = Math.round(props.tempMax);


    return (
        <div className="flex flex-col gap-y-7 justify-center p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
            <p className="text-center">{ dataTime }</p>
            <div className="flex justify-center items-cente">
                <img src={ weatherIcon } alt="" />
            </div>
            <ul className="flex flex-col">
                <li className="flex justify-between p-5 flex-col items-center">
                    <p>Temperature</p>
                    <div className="space-x-2">
                        <p className="inline"><span className="text-blue-900">↓</span> { minTemperature }</p>
                        <p className="inline"><span className="text-red-900">↑</span> { maxTemperature }</p>
                    </div>
                </li>
            </ul>
        </div>



    )
}

export default CardForecast;