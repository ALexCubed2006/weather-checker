import { THEMES } from '../../../config'

export default function useDayTheme(forecast) {
	if (!forecast.astro) {
		return {
			theme: THEMES.default,
		}
	}
	console.log('useDayTheme')
	const localTime = new Date().getHours()

	let sunRiseHour = +forecast.astro.sunrise.split(':')[0]
	if (forecast.astro.sunrise.split(' ')[1] === 'PM') {
		sunRiseHour += 12
	}

	let sunSetHour = +forecast.astro.sunset.split(':')[0]
	if (forecast.astro.sunset.split(' ')[1] === 'PM') {
		sunSetHour += 12
	}

	let moonRiseHour = +forecast.astro.moonrise.split(':')[0]
	if (forecast.astro.moonrise.split(' ')[1] === 'PM') {
		moonRiseHour += 12
	}

	let moonSetHour = +forecast.astro.moonset.split(':')[0]
	if (forecast.astro.moonset.split(' ')[1] === 'PM') {
		moonSetHour += 12
	}

	const isDay = localTime > sunRiseHour && localTime < sunSetHour

	return {
		theme: isDay ? THEMES.light : THEMES.dark,
		moonphase: forecast.astro.moon_phase,
		sunrise: sunRiseHour,
		sunset: sunSetHour,
		moonrise: moonRiseHour,
		moonset: moonSetHour,
	}
}
