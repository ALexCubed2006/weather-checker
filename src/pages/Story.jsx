import { memo } from 'react'
import { ROUTES } from '../../config'
import Nav from '../components/nav/Nav'

const Story = memo(() => {
	console.log('[Story]')

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
		</div>
	)
})

export default Story
