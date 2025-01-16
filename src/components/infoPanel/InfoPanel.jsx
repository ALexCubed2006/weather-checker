import { useSelector } from 'react-redux'
import { API_DEFAULT_FORECAST_TYPES, DEFAULT_DATE } from '../../../config'
import useDate from '../../hooks/weather/useDate'
import ForecastCard from '../forecastCard/ForecastCard'
import styles from './InfoPanel.module.css'

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
				<h1>Ещё интересненького на сегодня :</h1>
			<div className={styles.infoPanel}>
			<div>
				{/* temperature */}
				Темп. : {current.temp.current + '°C'}
				<div>Ощущается как : {current.temp.feelslike + '°C'}</div>
			</div>

			<div>
				{/* humidity */}
				Влажность : {current.humidity.current + '%'}
				<div>Точка росы : {current.humidity.dewpoint + '%'}</div>
			</div>

			<div>
				{/* wind */}
				Ветер : {current.wind.current + ' км/ч'}
				<div>Темп. с учетом ветра : {current.wind.windchill + '°C'}
					<div>
					Направление : {current.wind.direction.degrees + '°'}
					{current.wind.direction.direction}
					</div>
				</div>
			</div>

			<div>
				{/* last update of forecast */}
				Последнее обновление : 
				<div>
				{current.lastUpdated}
				</div>
			</div>
		</div>
		</div>
		</div>
	)
}

export default InfoPanel
