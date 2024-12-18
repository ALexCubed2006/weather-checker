import { useSelector } from 'react-redux'
import { DEFAULT_DATE } from '../../../config'
import styles from './WeatherScroller.module.css'

const WeatherScroller = () => {
	const forecast = useSelector((state) => state.weather.forecast)
	const currentHour = new Date().getHours()

	if (!forecast[DEFAULT_DATE]) return <div>Loading...</div>
	const hours = forecast[DEFAULT_DATE].forecast.forecastday[0].hour

	const filterHours = hours.filter((hour) => {
		return hour.time.split(' ')[1].split(':')[0] >= currentHour
	})

	return (
        // TODO:TEAM стилизовать
		<div className={styles.scroll}>
			{filterHours.map((hour) => (
				<span className={styles.hourContainer} key={hour.time}>
					<p>{hour.time.split(' ')[1]}</p>
					<p>{hour.temp_c}°C</p>
				</span>
			))}
		</div>
	)
}

export default WeatherScroller
