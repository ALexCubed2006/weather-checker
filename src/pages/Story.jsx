import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../config'
import Archive from '../components/archive/Archive'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
import AppLink from '../shared/AppLink/AppLink'

const Story = memo(() => {
	console.log('[Story]')
	const location = useSelector((state) => state.weather.sity)

	return (
		<div>
			<Nav
				type={{
					name: 'Story',
					default: ROUTES.story,
					forecast: ROUTES.sity + '/' + location,
					story: ROUTES.story,
					home: ROUTES.main,
				}}
			/>
			<Archive />
			<div>
				<AppLink path={ROUTES.main}>На главную</AppLink>
			</div>
			
			<Footer />
		</div>
	)
})

export default Story
