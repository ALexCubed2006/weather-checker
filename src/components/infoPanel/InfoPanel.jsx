import { useSelector } from 'react-redux'
import { API_DEFAULT_FORECAST_TYPES, DEFAULT_DATE } from '../../../config'
import useDate from '../../hooks/weather/useDate'
import ForecastCard from '../forecastCard/ForecastCard'

const InfoPanel = () => {
	const current = useSelector((state) => state.weather.current)
	const todayForecast = useSelector((state) => state.weather.forecast)

	if (!todayForecast[DEFAULT_DATE]) return <div>Loading...</div>
	return (
    // TODO:TEAM стилизовать и можете разбить по контейнерам
    // если надо, могу разнести на разные компоненты
		<div>
			{/* forecast for 3 days */}
			<ForecastCard
				forecast={todayForecast[DEFAULT_DATE].forecast.forecastday[0]}
				day={DEFAULT_DATE}
			/>
			<ForecastCard
				forecast={todayForecast[DEFAULT_DATE].forecast.forecastday[1]}
				day={useDate(1, API_DEFAULT_FORECAST_TYPES.forecast)}
			/>
			<ForecastCard
				forecast={todayForecast[DEFAULT_DATE].forecast.forecastday[2]}
				day={useDate(2, API_DEFAULT_FORECAST_TYPES.forecast)}
			/>

			<div>
				{/* temperature */}
				{current.temp.current + '°C'}
				{current.temp.feelslike + '°C'}
			</div>

			<div>
				{/* humidity */}
				{current.humidity.current + '%'}
				{current.humidity.dewpoint + '%'}
			</div>

			<div>
				{/* wind */}
				{current.wind.current + ' km/h'}
				{current.wind.gust + ' km/h'}
				{current.wind.windchill + '°'}
				{current.wind.direction.degrees + '°'}
				{current.wind.direction.direction}
			</div>

			<div>
				{/* last update of forecast */}
				{current.lastUpdated}
			</div>
		</div>
	)
}

export default InfoPanel
