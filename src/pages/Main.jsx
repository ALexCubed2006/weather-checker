import { memo } from 'react'
import { API_FORECAST_TYPES } from '../../config'
import Modal from '../components/modal/Modal'
import useDayTheme from '../hooks/theme/useDayTheme'
import useWeatherForecast from '../hooks/weather/useWeatherForecast'
import Nav from '../components/nav/Nav'

const Main = memo(() => {
	console.log('[Main]')
	const { forecast = null } = useWeatherForecast(API_FORECAST_TYPES.astronomy)
	const astro = useDayTheme(forecast)
	return (
		<div>
			<Nav type={'story'} />
			{/* <Modal /> */}
		</div>
	)
})

export default Main
