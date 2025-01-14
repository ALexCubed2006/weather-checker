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

	console.log(forecast.day.condition.code)
	console.log('[ForecastCard]', forecast)
	return (
		<div className={styles.class}>
			<div>{formattedDate}</div>
			<div>
				<div>
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
				{/* TODO: написать выбор картинок по кодам */}
				<img src={icons.snow} />

				<div>Влажность :{forecast.day.avghumidity}%</div>
				<div>Осадки :{forecast.day.totalprecip_mm + ' '} мм рт.ст</div>
			</div>
		</div>
	)
})

export default ForecastCard
