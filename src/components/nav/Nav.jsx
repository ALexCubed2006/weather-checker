import AppLink from '../../shared/AppLink/AppLink'
import styles from './Nav.module.css'

export default function Nav({ type }) {
	console.log('[Nav]', type)
	return (
		<div className={styles.nav}>
			<div>
				{/* TODO:TEAM добавить logo */}
				LOGO
			</div>

			{/* TODO:TEAM стилизовать и добавить иконки в теги */}
			<AppLink pass={type.default}>
				{/* сюда иконку вставить */}
				HOME
			</AppLink>
			<AppLink pass={type.forecast}>FORECAST</AppLink>
			<AppLink pass={type.story}>Archive</AppLink>
		</div>
	)
}
