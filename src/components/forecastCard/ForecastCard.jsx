import React, { memo } from 'react'

const ForecastCard = memo(({ forecast, day }) => {
	console.log('[ForecastCard]', day)
	return <div>ForecastCard</div>
})

export default ForecastCard
