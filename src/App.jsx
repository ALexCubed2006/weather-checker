import useWeatherForecast from './hooks/useWeatherForecast'

export default function App() {
	console.log('[App] render')
	const { forecast, isLoading } = useWeatherForecast('random')

	console.log(new Date().toISOString())
	return <div>{isLoading ? 'loading...' : JSON.stringify(forecast)}</div>
}
