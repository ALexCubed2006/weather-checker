import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_FORECAST_TYPES, ROUTES } from '../../config'
import ForecastCard from '../components/forecastCard/ForecastCard'
import Nav from '../components/nav/Nav'
import { fetchForecast } from '../hooks/weather/useWeatherForecast'
import { addHistory } from '../redux/weather.slice'

const Story = memo(() => {
	console.log('[Story]')
	const dispatch = useDispatch()
	const [history, setHistory] = useState([])
	const location = useSelector((state) => state.weather.sity)

	useEffect(() => {
		const fh = async (dt) => {
			const forecast = await fetchForecast(API_FORECAST_TYPES.history, dt)
			setHistory((history) => [
				...history,
				forecast.data.forecast.forecastday[0],
			])

			dispatch(addHistory({ day: dt, forecast: forecast.data }))
		}

		for (let i = 1; i <= 7; i++) {
			const dt = getIsoDateWeekAgo(i)
			fh(dt)
		}
	}, [])

	function getIsoDateWeekAgo(day) {
		const date = new Date()
		date.setDate(date.getDate() - day)
		return date.toISOString().slice(0, 10)
	}

	return (
		<div>
			<Nav
				type={{
					name: 'Story',
					default: ROUTES.story,
					forecast: ROUTES.sity + '/' + location,
					story: ROUTES.story,
					home: ROUTES.main,
				}}
			/>
			<div>
				{/* список дней */}

				{history.map((day, index) => {
					return <ForecastCard key={index} forecast={day} day={day.date} />
				})}
			</div>
		</div>
	)
})

export default Story
