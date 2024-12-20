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
				<AppLink path={type.home}>Home</AppLink>

				{/* TODO:TEAM стилизовать и добавить иконки в теги */}
				<AppLink path={type.default}>
					{/* сюда иконку вставить */}
					Default
				</AppLink>
				<AppLink path={type.forecast}>Forecast</AppLink>
				<AppLink path={type.story}>Archive</AppLink>
			</div>
		</div>
	)
}
