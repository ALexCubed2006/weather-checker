import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../config'
import Nav from '../components/nav/Nav'
import styles from './Main.module.css'

const Main = memo(() => {
	const location = useSelector((state) => state.weather.sity)
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
			
		</div>
	)
})

export default Main
