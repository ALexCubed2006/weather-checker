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
		<div>
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
			<div className={styles.scrollHours}>
			
			<div>
			<h1>Почасовой прогноз</h1>
			<p>Температура</p>
			<WeatherScroller type={INDICATOR_TYPES.temperature} />
			</div>

			{/* wind */}
			<div>
			<p>Ветер</p>
			<WeatherScroller type={INDICATOR_TYPES.wind} />
			</div>

			{/* humidity */}
			<div>
			<p>Влажность</p>
			<WeatherScroller type={INDICATOR_TYPES.humidity} />
			</div>

			{/* pressure */}
			<div>
			<p>Давление</p>
			<WeatherScroller type={INDICATOR_TYPES.pressure} />
			</div>

			{/* clouds */}
			<div>
			<p>Облачность</p>
			<WeatherScroller type={INDICATOR_TYPES.clouds} />
			</div>

			<InfoPanel />

			<Footer />
		</div>
		</div>
	)
})

export default Main
