import { memo } from 'react'
import useWeatherForecast from '../hooks/weather/useWeatherForecast'
import { API_FORECAST_TYPES } from '../../config'

const Main = memo(() => {
	const { forecast } = useWeatherForecast(API_FORECAST_TYPES.astronomy)
	console.log('Main')
	return <div>{JSON.stringify(forecast)}</div>
})

export default Main
