import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { API_FORECAST_TYPES, ROUTES } from '../../config'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
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

			<div>
				{forecast && (
					<>
						{/* TODO:TEAM стилизовать */}
						{/* если надо, могу расширить компонент новыми полями */}
						<div>
							{/* location */}
							{forecast.location.name}
							{forecast.location.region}
							{forecast.location.country}
						</div>

						<div>
							{/* last update */}
							{forecast.lastUpdated}
						</div>

						<div>
							{/* temp */}
							{forecast.temp.temp_c}
							{forecast.temp.feelslike_c}
						</div>

						<div>
							{/* humidity */}
							{forecast.humidity.current}
							{forecast.humidity.dewpoint}
						</div>

						<div>
							{/* condition */}
							{forecast.condition}
						</div>

						<div>
							{/* wind */}
							{forecast.wind.current}
							{forecast.wind.direction.degrees}
							{forecast.wind.direction.direction}
							{forecast.wind.gust}
							{forecast.wind.windchill}
						</div>
					</>
				)}
			</div>

			<Footer />
		</div>
	)
})

export default SityForecast
