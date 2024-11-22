import { memo } from 'react'
import { API_FORECAST_TYPES } from '../../config'
import useDayTheme from '../hooks/theme/useDayTheme'
import useWeatherForecast from '../hooks/weather/useWeatherForecast'

const Main = memo(() => {
	const { forecast } = useWeatherForecast(API_FORECAST_TYPES.astronomy)
	const astro = useDayTheme(forecast)
	console.log('Main')
	return <div>{JSON.stringify(astro)}</div>
})

export default Main
