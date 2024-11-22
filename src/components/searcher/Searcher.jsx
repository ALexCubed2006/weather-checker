import { useEffect, useRef, useState } from 'react'
import { API_FORECAST_TYPES } from '../../../config'
import { fetchForecast } from '../../hooks/weather/useWeatherForecast'

export default function Searcher() {
	const abortController = new AbortController()
	const inputRef = useRef(null)
	const [query, setQuery] = useState('Minsk')
	const [weather, setWeather] = useState({})

	useEffect(() => {
		const forecast = async () => {
			const f = await fetchForecast(
				API_FORECAST_TYPES.current,
				null,
				query,
				'ru',
				abortController.signal,
			)
			setWeather(f)
			console.log(f)
		}
		forecast()

		return () => abortController.abort()
	}, [query])

	return (
		<div>
			<input type='text' ref={inputRef} />
			<button onClick={() => setQuery(inputRef.current.value)}>
				Search
			</button>
			{JSON.stringify(weather)}
		</div>
	)
}
