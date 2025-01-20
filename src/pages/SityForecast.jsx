import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { API_FORECAST_TYPES, ROUTES } from '../../config'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
import styles from './SityForecast.module.css'

import {
	fetchForecast,
	formatForecast,
} from '../hooks/weather/useWeatherForecast'

const SityForecast = memo(() => {
	const location = useSelector((state) => state.weather.sity)
	const [forecast, setForecast] = useState(null)
	const { pathname } = useLocation()

	useEffect(() => {
		const fc = async () => {
			const forecast = await fetchForecast(
				API_FORECAST_TYPES.current,
				1,
				pathname,
			)
			const formatted = formatForecast(forecast)
			setForecast(formatted)
			console.log(formatted)
		}
		fc()
	}, [location])

	return (
		<div>
			<Nav
				type={{
					name: 'Sity',
					default: pathname,
					forecast: pathname,
					story: ROUTES.story,
					home: ROUTES.main,
				}}
			/>

			<div className={styles.sityInfo}>
				{forecast && (
					<>
						<div className={styles.region}>
							{/* location */}
							Город: {forecast.location.name}
							<div> Область: {forecast.location.region}</div>
							<div>Страна : {forecast.location.country}</div>
						</div>

						<div className={styles.lastUpdate}>
							{/* last update */}
							Последнее обновление : {forecast.lastUpdated}
						</div>

						<div className={styles.rowOfInfo}>
							<div>
								{/* humidity */}
								Влажность : {forecast.humidity.current + '%'}
								<div>
									Точка росы :{' '}
									{forecast.humidity.dewpoint + '°C'}
								</div>
							</div>

							<div>
								{/* condition */}
								Погодные условия : {forecast.condition}
							</div>

							<div>
								{/* wind */}
								Ветер : {forecast.wind.current + ' км/ч'}
								<div>
									Направление:{' '}
									{forecast.wind.direction.degrees}
									{forecast.wind.direction.direction}
								</div>
								<div>
									Порыв : {forecast.wind.gust + ' км/с'}
								</div>
							</div>
							<div>
								Температура с учетом ветра :{' '}
								{forecast.wind.windchill + '°C'}
							</div>
						</div>
					</>
				)}
			</div>

			<Footer />
		</div>
	)
})

export default SityForecast
