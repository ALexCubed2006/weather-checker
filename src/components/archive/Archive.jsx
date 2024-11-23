import { memo } from 'react'
import { API_FORECAST_TYPES, LANGUAGES } from '../../../config'
import useWeatherForecast from '../../hooks/weather/useWeatherForecast'
import styles from './Archive.module.css'

const Archive = memo(({ location, day }) => {
	const dt = new Date().toISOString().split('T')[0]

	const { forecast = null } = useWeatherForecast(
		API_FORECAST_TYPES.history,
		location,
		LANGUAGES.ru,
		dt,
	)
	return (
		<div className={styles.archive}>
			{forecast && JSON.stringify(forecast.location)}
		</div>
	)
})

export default Archive
