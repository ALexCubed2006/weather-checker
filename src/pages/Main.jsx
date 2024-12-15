import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../config'
import Nav from '../components/nav/Nav'

const Main = memo(() => {
	const location = useSelector((state) => state.weather.sity)
	return (
		<div>
			<Nav
				type={{
					name: 'Main',
					default: ROUTES.main,
					forecast: ROUTES.sity + '/' + location,
					story: ROUTES.story,
				}}
			/>
		</div>
	)
})

export default Main
