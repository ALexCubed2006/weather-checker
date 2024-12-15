import { memo, useState } from 'react'
import Archive from '../components/archive/Archive'
import Nav from '../components/nav/Nav'
import Searcher from '../components/searcher/Searcher'

const Story = memo(() => {
	console.log('[Story]')
	const [location, setLocation] = useState(null)

	// TODO: переделать
	const days = [1, 2, 3, 4, 5, 6, 7]
	return (
		<div>
			<Nav type={''} />
			<Searcher setLocation={setLocation} />
			{location
				? days.map((day) => {
						return (
							<Archive location={location} day={day} key={day} />
						)
				  })
				: ''}
		</div>
	)
})

export default Story
