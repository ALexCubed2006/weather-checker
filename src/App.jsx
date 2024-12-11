import { Route, Routes } from 'react-router-dom'
import {
	API_FORECAST_TYPES,
	DEFAULT_LOCATION,
	LANGUAGES,
	ROUTES,
} from '../config'
import { LanguageContext, LocationContext, ThemeContext } from '../context'
import useDayTheme from './hooks/theme/useDayTheme'
import useWeatherForecast from './hooks/weather/useWeatherForecast'
import Main from './pages/Main'
import Story from './pages/Story'

export default function App() {
	console.log('[App]')
	const { forecast = null } = useWeatherForecast(API_FORECAST_TYPES.astronomy)
	const { theme } = useDayTheme(forecast)
	console.log(DEFAULT_LOCATION)
	return (
		<ThemeContext.Provider value={theme}>
			<LanguageContext.Provider value={LANGUAGES.ru}>
				<LocationContext.Provider value={DEFAULT_LOCATION}>
					<Routes>
						<Route path={ROUTES.main} element={<Main />} />
						<Route path={ROUTES.story} element={<Story />} />
					</Routes>
				</LocationContext.Provider>
			</LanguageContext.Provider>
		</ThemeContext.Provider>
	)
}
