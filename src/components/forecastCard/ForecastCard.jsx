import React, { memo } from 'react'
import styles from './ForecastCard.module.css'

const ForecastCard = memo(({ forecast, day }) => {
	const icons = {
		snow: 'https://cdn.weatherapi.com/weather/64x64/day/326.png',
	}

	const date = new Date(day)
	const formattedDate = new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date)

	const year = date.getFullYear();
    const month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
    const dayOfMonth = date.getDate();

	console.log(forecast.day.condition.code)
	console.log('[ForecastCard]', forecast)
	return (
		<div className={styles.class}>
			<div className={styles.day}>{formattedDate}</div>
			<div className={styles.forecastInfo}>
				<div className={styles.firstColumn}>
					<div>
						Максимальная температура :
						{forecast.day.maxtemp_c + '°C'}
					</div>

					<div>
						Минимальная температура :{forecast.day.mintemp_c + '°C'}
					</div>
					<div>
						Средняя температура:
						{forecast.day.avgtemp_c + '°C'}
					</div>
				</div>
				<img
					className={styles.wheaterIcon}
					src={forecast.day.condition.icon}
				/>
				<div>
				<div>Влажность :{forecast.day.avghumidity}%</div>
				<div>Осадки :{forecast.day.totalprecip_mm + ' '} мм рт.ст</div>
				</div>
			</div>
		</div>
	)
})

export default ForecastCard
