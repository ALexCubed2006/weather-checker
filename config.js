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
export const DEFAULT_SITY = 'Minsk'

// get user location from browser
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			localStorage.setItem(
				'location',
				JSON.stringify({ latitude, longitude }),
			)
		},
		(error) => {
			console.warn(error.message)
		},
	)
} else {
	console.warn('Объект Geolocation не поддерживается вашим браузером')
}
export const DEFAULT_LOCATION = localStorage.getItem('location')
	? // query location
	  // q=[latitude],[longitude]
	  JSON.parse(localStorage.getItem('location')).latitude +
	  ',' +
	  JSON.parse(localStorage.getItem('location')).longitude
	: // default sity
	  DEFAULT_SITY

export const DEFAULT_LANG = localStorage.getItem('lang')
	? localStorage.getItem('lang')
	: LANGUAGES.ru

export const DEFAULT_DATE = new Date().toISOString().split('T')[0]
export const DEFAULT_DAYS_COUNT = 3
export const HISTORY_DAYS = [
	// FIXME: сделать даты на неделю назад
	DEFAULT_DATE,
	new Date().toISOString().split('T')[0],
	new Date().toISOString().split('T')[0],
	new Date().toISOString().split('T')[0],
	new Date().toISOString().split('T')[0],
	new Date().toISOString().split('T')[0],
	new Date().toISOString().split('T')[0],
]

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

export const ROUTES = {
	main: '/',
	story: '/story',
	sity: '/sity',
}
