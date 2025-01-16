import {
	API_DEFAULT_FORECAST_TYPES,
	WEATHER_API_URL,
	Langs as randomLangs,
	Locations as randomLocations,
} from '../../../config'

// generate random params
// for use in forecast hook
export default function useRandomParams() {
	console.log('useRandomParams')

	const randomLocation =
		randomLocations[Math.floor(Math.random() * randomLocations.length)]
	const randomLang =
		randomLangs[Math.floor(Math.random() * randomLangs.length)]
	const randomType =
		API_DEFAULT_FORECAST_TYPES[
			Object.keys(API_DEFAULT_FORECAST_TYPES)[
				Math.floor(
					Math.random() *
						Object.keys(API_DEFAULT_FORECAST_TYPES).length,
				)
			]
		]
	const randomApiUrl = `${WEATHER_API_URL}${randomType}.json`

	if (randomType === API_DEFAULT_FORECAST_TYPES.history) {
		const date = new Date()
		date.setDate(date.getDate() - Math.floor(Math.random() * 7))

		return {
			randomLocation,
			randomLang,
			randomType,
			randomDay: date.toISOString().split('T')[0],
			randomApiUrl,
		}
	} else if (randomType === API_DEFAULT_FORECAST_TYPES.forecast) {
		return {
			randomLocation,
			randomLang,
			randomType,
			randomDay: Math.floor(Math.random() * 3) + 1,
			randomApiUrl,
		}
	} else {
		return {
			randomLocation,
			randomLang,
			randomType,
			randomDay: new Date().toISOString().split('T')[0],
			randomApiUrl,
		}
	}
}
