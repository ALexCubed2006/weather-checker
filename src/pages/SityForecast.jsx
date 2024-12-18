import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../config'
import Nav from '../components/nav/Nav'

const SityForecast = memo(() => {
	const location = useSelector((state) => state.weather.sity)
	const { pathname } = useLocation()
	return (
		<div>
			<Nav
				type={{
					name: 'Sity',
					default: pathname,
					forecast: pathname + '/' + location,
					story: ROUTES.story,
					home: ROUTES.main,
				}}
			/>
			<div>{pathname}</div>
		</div>
	)
})

export default SityForecast
