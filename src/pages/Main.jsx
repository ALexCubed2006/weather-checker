import { memo } from 'react'
import { useSelector } from 'react-redux'
import { DEFAULT_DATE, INDICATOR_TYPES, ROUTES } from '../../config'
import Footer from '../components/footer/Footer'
import InfoPanel from '../components/infoPanel/InfoPanel'
import Nav from '../components/nav/Nav'
import Searcher from '../components/searcher/Searcher'
import WeatherScroller from '../components/weatherScroller/WeatherScroller'
import styles from './Main.module.css'

const Main = memo(() => {
	console.log('[Main]')
	const location = useSelector((state) => state.weather.sity)

	console.log(new Date().getHours())
	console.log(DEFAULT_DATE)
	return (
		<div className={styles.nav}>
			<Nav
				type={{
					name: 'Main',
					default: ROUTES.main,
					forecast: ROUTES.sity + '/' + location,
					story: ROUTES.story,
					home: ROUTES.main,
				}}
			/>
			<Searcher />

			{/* TODO:TEAM решите какие оставить а какие убрать */}
			{/* temperature */}
			<p>Temperature</p>
			<WeatherScroller type={INDICATOR_TYPES.temperature} />

			{/* wind */}
			<p>Wind</p>
			<WeatherScroller type={INDICATOR_TYPES.wind} />

			{/* humidity */}
			<p>Humidity</p>
			<WeatherScroller type={INDICATOR_TYPES.humidity} />

			{/* pressure */}
			<p>Pressure</p>
			<WeatherScroller type={INDICATOR_TYPES.pressure} />

			{/* clouds */}
			<p>Clouds</p>
			<WeatherScroller type={INDICATOR_TYPES.clouds} />

			<InfoPanel />

			<Footer />
		</div>
	)
})

export default Main
