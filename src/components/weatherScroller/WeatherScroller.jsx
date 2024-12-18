import { useSelector } from 'react-redux'
import { DEFAULT_DATE, INDICATOR_TYPES } from '../../../config'
import styles from './WeatherScroller.module.css'

const WeatherScroller = ({ type = INDICATOR_TYPES.temperature }) => {
	const forecast = useSelector((state) => state.weather.forecast)
	const currentHour = new Date().getHours()

	if (!forecast[DEFAULT_DATE]) return <div>Loading...</div>
	
	const hours = forecast[DEFAULT_DATE].forecast.forecastday[0].hour
	const tomorrowDays = forecast[DEFAULT_DATE].forecast.forecastday[1].hour

	const filterHours = hours.filter((hour) => {
		return hour.time.split(' ')[1].split(':')[0] >= currentHour
	})

	const filterTomorrowHours = tomorrowDays.filter((hour) => {
		return hour.time.split(' ')[1].split(':')[0] <= currentHour
	})

	return (
		// TODO:TEAM стилизовать
		<div className={styles.scroll}>
			{filterHours.map((hour) => (
				<span className={styles.hourContainer} key={hour.time}>
					<p>{hour.time.split(' ')[1]}</p>
					<p>
						{type === INDICATOR_TYPES.temperature
							? hour.temp_c
							: type === INDICATOR_TYPES.wind
							? hour.wind_kph
							: type === INDICATOR_TYPES.pressure
							? hour.pressure_mb
							: type === INDICATOR_TYPES.clouds
							? hour.cloud
							: type === INDICATOR_TYPES.humidity
							? hour.humidity
							: hour.dewpoint_c}
						°C
					</p>
				</span>
			))}
			{filterTomorrowHours.map((hour) => (
				<span className={styles.hourContainer} key={hour.time}>
					<p>{hour.time.split(' ')[1]}</p>
					<p>
						{type === INDICATOR_TYPES.temperature
							? hour.temp_c
							: type === INDICATOR_TYPES.wind
							? hour.wind_kph
							: type === INDICATOR_TYPES.pressure
							? hour.pressure_mb
							: type === INDICATOR_TYPES.clouds
							? hour.cloud
							: type === INDICATOR_TYPES.humidity
							? hour.humidity
							: hour.dewpoint_c}
						°C
					</p>
				</span>
			))}
		</div>
	)
}

export default WeatherScroller
