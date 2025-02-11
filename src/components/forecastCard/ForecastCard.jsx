import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { DAY_TIME, THEMES } from '../../../config'
import styles from './ForecastCard.module.css'

const ForecastCard = memo(({ forecast, day }) => {
	const theme = useSelector((state) => state.weather.theme)

	const icons = {
		day: {
			1000: 'sun.png',
			1003: 'ОблычноCпрояснениями.png',
			1006: 'Облачно.png',
			1009: 'Group106.png',
			1030: 'Облачно.png',
			1063: 'Group123.png',
			1066: 'Group125.png',
			1069: 'Group125.png',
			1072: 'Group125.png',
			1087: 'Group127.png',
			1114: 'Group125.png',
			1117: 'Group127.png',
			1135: 'Облачно.png',
			1147: 'Облачно.png',
			1150: 'Group123.png',
			1153: 'Group123.png',
			1168: 'Group123.png',
			1171: 'Group127.png',
			1180: 'Group123.png',
			1183: 'Group123.png',
			1186: 'Group123.png',
			1189: 'Group123.png',
			1192: 'Group123.png',
			1195: 'Group127.png',
			1198: 'Group123.png',
			1201: 'Group123.png',
			1204: 'Group125.png',
			1207: 'Group125.png',
			1210: 'Group125.png',
			1213: 'Group125.png',
			1216: 'Group125.png',
			1219: 'Group125.png',
			1222: 'Group125.png',
			1225: 'Group125.png',
			1237: 'Group125.png',
			1240: 'Group123.png',
			1243: 'Group127.png',
			1246: 'Group127.png',
			1249: 'Group123.png',
			1252: 'Group123.png',
			1255: 'Group123.png',
			1258: 'Group123.png',
			1261: 'Group123.png',
			1264: 'Group123.png',
			1273: 'Group127.png',
			1276: 'Group127.png',
			1279: 'Group127.png',
			1282: 'Group127.png',
		},
		night: {
			1000: 'moon.png',
			1003: 'ОблычноCпрояснениями(ночь).png',
			1006: 'Облачно.png',
			1009: 'Group105.png',
			1030: 'Облачно.png',
			1063: 'Group122.png',
			1066: 'Group126.png',
			1069: 'Group126.png',
			1072: 'Group126.png',
			1087: 'Group124.png',
			1114: 'Group126.png',
			1117: 'Group124.png',
			1135: 'Облачно.png',
			1147: 'Облачно.png',
			1150: 'Group122.png',
			1153: 'Group122.png',
			1168: 'Group122.png',
			1171: 'Group124.png',
			1180: 'Group122.png',
			1183: 'Group122.png',
			1186: 'Group122.png',
			1189: 'Group122.png',
			1192: 'Group122.png',
			1195: 'Group124.png',
			1198: 'Group122.png',
			1201: 'Group122.png',
			1204: 'Group126.png',
			1207: 'Group126.png',
			1210: 'Group126.png',
			1213: 'Group126.png',
			1216: 'Group126.png',
			1219: 'Group126.png',
			1222: 'Group126.png',
			1225: 'Group126.png',
			1237: 'Group126.png',
			1240: 'Group122.png',
			1243: 'Group124.png',
			1246: 'Group124.png',
			1249: 'Group122.png',
			1252: 'Group122.png',
			1255: 'Group122.png',
			1258: 'Group122.png',
			1261: 'Group122.png',
			1264: 'Group122.png',
			1273: 'Group124.png',
			1276: 'Group124.png',
			1279: 'Group124.png',
			1282: 'Group124.png',
		},
	}

	const date = new Date(day)
	const formattedDate = new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date)
    const formattedDateSplitted = formattedDate.split(' ')

	const icon =
		icons[theme.theme === 'light' ? 'day' : 'night'][
			forecast.day.condition.code
		]

	console.log(
		icons[theme.theme === THEMES.light ? DAY_TIME.day : DAY_TIME.night][
			forecast.day.condition.code
		],
	)
	console.log('[ForecastCard]', forecast)
	return (
		<div className={styles.class}>
			<div className={styles.day}>
				<div className={styles.num}>{formattedDateSplitted[0]}</div>
			<div className={styles.yearDay}>
			<div>{formattedDateSplitted[1]}</div>
			<div>{formattedDateSplitted[2]}</div>
			</div>
			</div>
			<div className={styles.forecastInfo}>
				<div className={styles.firstColumn}>
					<div>
						Макс. температура :
						{forecast.day.maxtemp_c + '°C'}
					</div>

					<div>
						Мин. температура :{forecast.day.mintemp_c + '°C'}
					</div>
					<div>
						Средняя :
						{forecast.day.avgtemp_c + '°C'}
					</div>
				</div>
				<img className={styles.wheaterIcon} src={icon} />
                <div className={styles.firstColumn}>
				<div>Влажность :{forecast.day.avghumidity}%</div>
				<div>Осадки :{forecast.day.totalprecip_mm + ' '} мм рт.ст</div>
				</div>
				</div>
			</div>
		
	)
})

export default ForecastCard
