import { Route, Routes } from 'react-router-dom'
import { API_FORECAST_TYPES, LANGUAGES } from '../config'
import { LanguageContext, ThemeContext } from '../context'
import useDayTheme from './hooks/theme/useDayTheme'
import useWeatherForecast from './hooks/weather/useWeatherForecast'
import Main from './pages/Main'

export default function App() {
	console.log('App')
	const { forecast } = useWeatherForecast(API_FORECAST_TYPES.astronomy)
	console.log(forecast)
	const { theme } = useDayTheme(forecast)
	console.log(theme)
	return (
		<ThemeContext.Provider value={theme}>
			<LanguageContext.Provider value={LANGUAGES.ru}>
				<Routes>
					<Route path='' element={<Main />} />
					{/* <Route path='/forecast' element={<Forecast />} /> */}
				</Routes>
			</LanguageContext.Provider>
		</ThemeContext.Provider>
	)
}
