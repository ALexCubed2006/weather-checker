import React, { memo } from 'react'

const ForecastCard = memo(({ forecast, day }) => {
	console.log('[ForecastCard]', forecast)
	return (
		<div>
			<div>{day}</div>
			<div>
				<div>
					<div>
						Max temp:
						{forecast.day.maxtemp_c}
					</div>

					<div>
						Min temp:
						{forecast.day.mintemp_c}
					</div>
					<div>
						Avg temp:
						{forecast.day.avgtemp_c}
					</div>
				</div>
				<img src={forecast.day.condition.icon} />

				<div>
					Humidity
					{forecast.day.avghumidity}%
				</div>
				<div>
					Precipitation
					{forecast.day.totalprecip_mm}
				</div>
			</div>
		</div>
	)
})

export default ForecastCard
