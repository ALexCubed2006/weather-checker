import React, { memo } from 'react'
import styles from './ForecastCard.module.css'

const ForecastCard = memo(({ forecast, day }) => {
	console.log('[ForecastCard]', forecast)
	return (
		<div className={styles.class}>
			<div className={styles.day}>{day}</div>
			<div className={styles.forecastInfo}>
				<div>
					<div>
						Максимальная температура : 
						{forecast.day.maxtemp_c + '°C'}
					</div>

					<div>
						Минимальная температура :
						{forecast.day.mintemp_c + '°C'}
					</div>
					<div>
						Средняя температура:
						{forecast.day.avgtemp_c + '°C'}
					</div>
				</div>
				<img className = {styles.wheaterIcon}src={forecast.day.condition.icon} />

				<div>
					Влажность : 
					{forecast.day.avghumidity }%
				</div>
				<div>
					Осадки :
					{forecast.day.totalprecip_mm + ' '} мм рт.ст
				</div>
			</div>
		</div>
	)
})

export default ForecastCard
