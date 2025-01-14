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
				{/* TODO:TEAM стилизовать и добавить иконки в теги */}
				<AppLink path={type.default}>
					{/* сюда иконку вставить */}
					Эта страница
				</AppLink>
				<AppLink path={type.home}>Домой</AppLink>

				<AppLink path={type.forecast}>прогноз</AppLink>
				<AppLink path={type.story}>Архив</AppLink>
			</div>
		</div>
	)
}
