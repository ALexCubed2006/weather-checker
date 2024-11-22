import React, { memo } from 'react'
import Searcher from '../components/searcher/Searcher'

const Story = memo(() => {
	console.log('Story')
	return (
		<div>
			<Searcher />
		</div>
	)
})

export default Story
