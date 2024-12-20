import { API_FORECAST_TYPES } from '../../../config'

export default function useDate(
	dayCount = 0,
	type = API_FORECAST_TYPES.current,
    
) {
	const date = new Date()

	if (type === API_FORECAST_TYPES.tomorrow) {
		date.setDate(date.getDate() + 1)
	}

	if (type === API_FORECAST_TYPES.yesterday) {
		date.setDate(date.getDate() - 1)
	}

	if (type === API_FORECAST_TYPES.random) {
		date.setDate(date.getDate() + Math.floor(Math.random() * dayCount))
	}

	if (type === API_FORECAST_TYPES.forecast) {
		date.setDate(date.getDate() + dayCount)
	}

	if (type === API_FORECAST_TYPES.history) {
		date.setDate(date.getDate() - dayCount)
	}

	return date.toISOString().slice(0, 10)
}
