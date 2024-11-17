import axios from 'axios'
import { useEffect, useState } from 'react'
import {
	API_FORECAST_TYPES,
	CURRENT_API_URL,
	DEFAULT_DATE,
	DEFAULT_LANG,
	DEFAULT_LOCATION,
	HISTORY_API_URL,
	WEATHER_API_KEY,
} from '../../config'
import useRandomParams from './useRandomParams'

export default function useWeatherForecast(
	type = API_FORECAST_TYPES.current,
	location = DEFAULT_LOCATION,
	lang = DEFAULT_LANG,
	day = DEFAULT_DATE,
) {
	const [isLoading, setISLoading] = useState(false)
	const [forecast, setForecast] = useState({})
	const [error, setError] = useState(null)

	useEffect(() => {
		async function asyncFetch() {
			const weather = await fetchForecast(type, day, location, lang)

			if (weather.data.error) {
				setError(weather.data.error)
				setISLoading(false)
			}

			const forecast = formatForecast(weather, type)
			setForecast(forecast)
			setISLoading(false)
		}
		asyncFetch()
	}, [location, lang, type])

	// helper functions
	const formatForecast = (weather, type = API_FORECAST_TYPES.current) => {
		// TODO: create selecting random params
		if (type === API_FORECAST_TYPES.random) {
			return weather.data
		}
		return {
			condition: weather.data?.current?.condition?.text,
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
	const fetchForecast = async (type, day, location, lang) => {
		setISLoading(true)
		switch (type) {
			case API_FORECAST_TYPES.current:
				return await axios.get(CURRENT_API_URL, {
					headers: {
						key: WEATHER_API_KEY,
					},
					params: {
						q: location,
						lang: lang,
					},
				})
			case API_FORECAST_TYPES.forecast:
				return await axios.get(FORECAST_API_URL, {
					headers: {
						key: WEATHER_API_KEY,
					},
					params: {
						q: location,
						days: day,
						lang: lang,
					},
				})
			case API_FORECAST_TYPES.history:
				return await axios.get(HISTORY_API_URL, {
					headers: {
						key: WEATHER_API_KEY,
					},
					params: {
						q: location,
						dt: day,
						lang: lang,
					},
				})
			case API_FORECAST_TYPES.random: {
				const {
					randomApiUrl,
					randomLang,
					randomDay,
					randomLocation,
					randomType,
				} = useRandomParams()

				if (randomType === API_FORECAST_TYPES.forecast) {
					return await axios.get(randomApiUrl, {
						headers: {
							key: WEATHER_API_KEY,
						},
						params: {
							q: randomLocation,
							days: randomDay,
							lang: randomLang,
						},
					})
				} else if (randomType === API_FORECAST_TYPES.history) {
					return await axios.get(randomApiUrl, {
						headers: {
							key: WEATHER_API_KEY,
						},
						params: {
							q: randomLocation,
							dt: randomDay,
							lang: randomLang,
						},
					})
				} else {
					return await axios.get(randomApiUrl, {
						headers: {
							key: WEATHER_API_KEY,
						},
						params: {
							q: randomLocation,
							lang: randomLang,
						},
					})
				}
			}
			default:
				return await axios.get(CURRENT_API_URL, {
					headers: {
						key: WEATHER_API_KEY,
					},
					params: {
						q: location,
						lang: lang,
					},
				})
		}
	}

	return {
		// forecast based on given params
		forecast,

		// conditions
		isLoading,
		error,
	}
}
