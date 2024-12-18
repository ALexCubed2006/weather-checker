import AppLink from '../../shared/AppLink/AppLink'
import styles from './Nav.module.css'

export default function Nav({ type }) {
	console.log('[Nav]', type)
	return (
		<div className={styles.nav}>
			<div className={styles.logo}>
				{/* TODO:TEAM добавить logo */}
				LOGO
			</div>
            <div className={styles.links}>
			<AppLink pass={type.home}>Home</AppLink>

			{/* TODO:TEAM стилизовать и добавить иконки в теги */}
			<AppLink pass={type.default}>
				{/* сюда иконку вставить */}
				Default
			</AppLink>
			<AppLink pass={type.forecast}>Forecast</AppLink>
			<AppLink pass={type.story}>Archive</AppLink></div>
		</div>
	)
}
