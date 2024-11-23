import { useContext, useRef, useState } from 'react'
import { API_FORECAST_TYPES, LANGUAGES } from '../../../config'
import { LocationContext } from '../../../context'
import { fetchForecast } from '../../hooks/weather/useWeatherForecast'
import AppLink from '../../shared/AppLink/AppLink'
import styles from './Nav.module.css'

export default function Nav({ type }) {
	const inputRef = useRef(null)
	const location = useContext(LocationContext)
	const [query, setQuery] = useState(location)

	const forecast = async () => {
		const f = await fetchForecast(
			API_FORECAST_TYPES.current,
			null,
			query,
			LANGUAGES.ru,
		)
		console.log(f)
		// setWeather(f)
	}

	return (
		<div className={styles.nav}>
			<div>{/* TODO:TEAM добавить logo */}</div>
			<div>
				<input type='text' ref={inputRef} />
				<button
					onClick={() => {
						setQuery(inputRef.current.value)
						// forecast()
						// FIXME: добавить переход на страницу погоды города
					}}
				>
					{/* TODO:TEAM добавить иконку */}
					<img src='' alt='' />
					test
				</button>
			</div>
			<AppLink pass={type}>{type}</AppLink>
		</div>
	)
}
