// TODO: move to github env variables
export const WEATHER_API_KEY = '15a662508ba94518964174204241511'

// api url
export const WEATHER_API_URL = 'https://api.weatherapi.com/v1/'
export const FORECAST_API_URL = 'https://api.weatherapi.com/v1/forecast.json'
export const HISTORY_API_URL = 'https://api.weatherapi.com/v1/history.json'
export const CURRENT_API_URL = 'https://api.weatherapi.com/v1/current.json'
export const ASTRO_API_URL = 'https://api.weatherapi.com/v1/astronomy.json'

// constants
export const LANGUAGES = { ru: 'Русский', en: 'English' }
export const THEMES = { light: 'light', dark: 'dark', default: 'light' }

export const DEFAULT_LOCATION = 'Minsk'
export const DEFAULT_LANG = 'ru'
export const DEFAULT_DATE = new Date().toISOString().split('T')[0]

// api types
export const API_DEFAULT_FORECAST_TYPES = {
	current: 'current',
	forecast: 'forecast',
	history: 'history',
}
export const API_FORECAST_TYPES = {
	...API_DEFAULT_FORECAST_TYPES,
	tomorrow: 'tomorrow',
	yesterday: 'yesterday',
	random: 'random',
	astronomy: 'astronomy',
}
