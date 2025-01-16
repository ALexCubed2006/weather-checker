import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_DEFAULT_FORECAST_TYPES, API_FORECAST_TYPES } from '../../../config'
import useDate from '../../hooks/weather/useDate'
import { fetchForecast } from '../../hooks/weather/useWeatherForecast'
import { addHistory } from '../../redux/weather.slice'
import ForecastCard from '../forecastCard/ForecastCard'
import styles from './Archive.module.css'

const Archive = memo(() => {
	const dispatch = useDispatch()
	const [history, setHistory] = useState([])
	const location = useSelector((state) => state.weather.sity)

	useEffect(() => {
		const fh = async (dt) => {
			const forecast = await fetchForecast(
				API_FORECAST_TYPES.history,
				dt,
				location,
			)

			setHistory((history) => [
				...history,
				forecast.data.forecast.forecastday[0],
			])

			dispatch(addHistory({ day: dt, forecast: forecast.data }))
		}

		for (let i = 1; i <= 7; i++) {
			const dt = useDate(i, API_DEFAULT_FORECAST_TYPES.history)
			fh(dt)
		}
	}, [location])

	return (
		<div className={styles.archive}>
			{/* список дней */}
			{history.map((day, index) => {
				return (
					<ForecastCard key={index} forecast={day} day={day.date} />
				)
			})}
		</div>
	)
})

export default Archive
