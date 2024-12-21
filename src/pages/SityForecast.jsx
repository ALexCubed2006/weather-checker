import React, { memo, useEffect } from 'react'
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
	const { pathname } = useLocation()

	useEffect(() => {
		const fc = async () => {
			const forecast = await fetchForecast(
				API_FORECAST_TYPES.current,
				1,
				pathname,
			)
			const formatted = formatForecast(forecast)
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
			<div>{pathname.split('/').slice(-1)[0].split('%20').join(' ')}</div>

			<Footer />
		</div>
	)
})

export default SityForecast
