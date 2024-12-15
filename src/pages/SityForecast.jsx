import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

const SityForecast = memo(() => {
	const { pathname } = useLocation()
	return <div>{pathname}</div>
})

export default SityForecast
