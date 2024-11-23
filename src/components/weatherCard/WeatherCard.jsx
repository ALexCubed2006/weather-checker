import { useContext } from 'react'
import { LANGUAGES } from '../../../config'
import { LocationContext } from '../../../context'
import { API_FORECAST_TYPES } from '../../config'
import useWeatherForecast from '../hooks/weather/useWeatherForecast'

export default function WeatherCard({ type, day = 1}) {
	const location = useContext(LocationContext)
	const { forecast = null } = useWeatherForecast(
		API_FORECAST_TYPES[type],
		location,
		LANGUAGES.ru,
		day
	)

	return (
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
			commodi saepe, voluptates placeat cumque repellat a voluptatem,
			repudiandae nihil dolor dolore quae laboriosam qui, reiciendis
			nesciunt ea. Suscipit, veritatis quasi!
		</div>
	)
}
