import axios from 'axios'
import {
	API_FORECAST_TYPES,
	ASTRO_API_URL,
	CURRENT_API_URL,
	DEFAULT_DATE,
	DEFAULT_LANG,
	DEFAULT_LOCATION,
	FORECAST_API_URL,
	HISTORY_API_URL,
	Locations,
	WEATHER_API_KEY,
} from '../../../config'
import useRandomParams from './useRandomParams'

// helper functions
export const formatForecast = (weather, type = API_FORECAST_TYPES.current) => {
	if (type === API_FORECAST_TYPES.current) {
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
	if (type === API_FORECAST_TYPES.astronomy) {
		return {
			astro: {
				sunrise: weather.data.astronomy.astro.sunrise,
				sunset: weather.data.astronomy.astro.sunset,
				moonrise: weather.data.astronomy.astro.moonrise,
				moonset: weather.data.astronomy.astro.moonset,
				moonphase: weather.data.astronomy.astro.moon_phase,
				moonilluminance: weather.data.astronomy.astro.moon_illumination,
				isMoonUp: weather.data.astronomy.astro.is_moon_up,
				isSunUp: weather.data.astronomy.astro.is_sun_up,
			},
			location: {
				name: weather.data.location.name,
				region: weather.data.location.region,
				country: weather.data.location.country,
				latitude: weather.data.location.lat,
				longitude: weather.data.location.lon,
			},
		}
	}

	if (type === API_FORECAST_TYPES.random) {
		return weather.data
	}
	return weather.data
}

export const fetchForecast = async (
	type = API_FORECAST_TYPES.current,
	day = DEFAULT_DATE,
	location = DEFAULT_LOCATION,
	lang = DEFAULT_LANG,
	signal = null,
) => {
	const regex = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/
	const match = location.match(regex)
	if (!match?.length) {
		if (
			!Locations.includes(
				location
					.substring(6)
					.replaceAll('%20', ' ')
					.toLocaleLowerCase(),
			)
		) {
			location = DEFAULT_LOCATION
		} else {
			location = location.substring(6).replaceAll('%20', ' ')
		}
	}

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
				signal,
			})
		case API_FORECAST_TYPES.forecast:
			return await axios.get(FORECAST_API_URL, {
				headers: {
					key: WEATHER_API_KEY,
				},
				params: {
					q: location,
					days: +day,
					lang: lang,
				},
				signal,
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
				signal,
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
					signal,
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
					signal,
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
					signal,
				})
			}
		}
		case API_FORECAST_TYPES.astronomy:
			return await axios.get(ASTRO_API_URL, {
				headers: {
					key: WEATHER_API_KEY,
				},
				params: {
					q: location,
					lang: lang,
				},
				signal,
			})
		default:
			return await axios.get(CURRENT_API_URL, {
				headers: {
					key: WEATHER_API_KEY,
				},
				params: {
					q: location,
					lang: lang,
				},
				signal,
			})
	}
}
