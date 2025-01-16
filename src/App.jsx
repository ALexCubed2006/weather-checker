import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import {
	API_FORECAST_TYPES,
	DEFAULT_DAYS_COUNT,
	DEFAULT_LOCATION,
	LANGUAGES,
	ROUTES,
} from '../config'
import { LanguageContext, LocationContext, ThemeContext } from '../context'
import useDayTheme from './hooks/theme/useDayTheme'
import {
	fetchForecast,
	formatForecast,
} from './hooks/weather/useWeatherForecast'
import Main from './pages/Main'
import SityForecast from './pages/SityForecast'
import Story from './pages/Story'
import {
	addForecast,
	setAstro,
	setCurrent,
	setTheme,
} from './redux/weather.slice'

export default function App() {
	console.log('[App]')
	const dispatch = useDispatch()

	useEffect(() => {
		const ff = async () => {
			// current
			const current = await fetchForecast()
			const currentFormatted = formatForecast(current)

			dispatch(setCurrent(currentFormatted))

			// astronomy
			const astronomy = await fetchForecast(API_FORECAST_TYPES.astronomy)

			dispatch(setAstro(astronomy.data))
			// theme
			const theme = useDayTheme(astronomy.data.astronomy)

			dispatch(setTheme(theme))

			// forecast
			const forecast = await fetchForecast(
				API_FORECAST_TYPES.forecast,
				DEFAULT_DAYS_COUNT,
			)

			dispatch(
				addForecast({
					day: forecast.data.forecast.forecastday[0].date,
					forecast: forecast.data,
				}),
			)
		}
		ff()
	}, [])

	const theme = useSelector((state) => state.weather.theme)
	if (!theme) return null

	console.log(theme)

	return (
		<ThemeContext.Provider value={theme}>
			<LanguageContext.Provider value={LANGUAGES.ru}>
				<LocationContext.Provider value={DEFAULT_LOCATION}>
					<Routes>
						<Route path={ROUTES.main} element={<Main />} />
						<Route path={ROUTES.story} element={<Story />} />
						<Route
							path={ROUTES.sity + '/*'}
							element={<SityForecast />}
						/>
					</Routes>
				</LocationContext.Provider>
			</LanguageContext.Provider>
		</ThemeContext.Provider>
	)
}
