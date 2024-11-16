import axios from 'axios'
import { useEffect, useState } from 'react'
import {
	CURRENT_API_URL,
	DEFAULT_LANG,
	DEFAULT_LOCATION,
	WEATHER_API_KEY,
} from '../../config'

export default function useWeatherForecast(
	location = DEFAULT_LOCATION,
	lang = DEFAULT_LANG,
	type = 'current',
	day = 0,
) {
	const [isLoading, setISLoading] = useState(false)
	const [forecast, setForecast] = useState({})
	const [error, setError] = useState(null)

	useEffect(() => {
		setISLoading(true)
		switch (type) {
			case 'current':
				weatherCurrent(location, lang)
				break
			case 'forecast':
				weatherForecast(day, location, lang)
				break
			case 'history':
				weatherHistory(day, location, lang)
				break
			default:
				weatherCurrent(location, lang)
				break
		}
	}, [location, lang, type])

	const weatherCurrent = async (location, lang) => {
		const weather = await axios.get(CURRENT_API_URL, {
			headers: {
				key: WEATHER_API_KEY,
			},
			params: {
				q: location,
				lang: lang,
			},
		})

		if (weather.data.error) {
			setError(weather.data.error)
			setISLoading(false)
			return
		}

		const forecast = formatForecast(weather)

		setForecast(forecast)
		setISLoading(false)

		return forecast
	}
	const weatherForecast = async (day, location, lang) => {
		const weather = await axios.get(FORECAST_API_URL, {
			headers: {
				key: WEATHER_API_KEY,
			},
			params: {
				q: location,
				days: day,
				lang: lang,
			},
		})

		if (weather.data.error) {
			setError(weather.data.error)
			setISLoading(false)
			return
		}

		const forecast = formatForecast(weather)

		setForecast(forecast)
		setISLoading(false)
		return forecast
	}
	const weatherHistory = async (day, location, lang) => {
		const weather = await axios.get(HISTORY_API_URL, {
			headers: {
				key: WEATHER_API_KEY,
			},
			params: {
				q: location,
				days: day,
				lang: lang,
			},
		})

		if (weather.data.error) {
			setError(weather.data.error)
			setISLoading(false)
			return
		}

		const forecast = formatForecast(weather)

		setForecast(forecast)
		setISLoading(false)
		return forecast
	}

	const formatForecast = (weather) => {
		return {
			condition: weather.data.current.condition.text,
			location: {
				name: weather.data.location.name,
				region: weather.data.location.region,
				country: weather.data.location.country,
				latitude: weather.data.location.lat,
				longitude: weather.data.location.lon,
			},
			temp: {
				current: weather.data.current.temp_c,
				feelslike: weather.data.current.feelslike_c,
			},
			humidity: {
				current: weather.data.current.humidity,
				dewpoint: weather.data.current.dewpoint_c,
			},
			wind: {
				current: weather.data.current.wind_kph,
				direction: {
					degrees: weather.data.current.wind_degree,
					direction: weather.data.current.wind_dir,
				},
				gust: weather.data.current.gust_kph,
				windchill: weather.data.current.windchill_c,
			},
			lastUpdated: weather.data.current.last_updated,
		}
	}

	return {
		forecast,
		isLoading,
		error,
		weatherCurrent,
		weatherForecast,
		weatherHistory,
	}
}
