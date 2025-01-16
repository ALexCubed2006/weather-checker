import AppLink from '../../shared/AppLink/AppLink'
import styles from './Nav.module.css'

export default function Nav({ type }) {
	console.log('[Nav]', type)
	return (
		<div className={styles.nav}>
			<div className={styles.logo}>
				
				{<img src="src\public\тимурикона.jpg" alt="" />
				/* TODO:TEAM добавить logo */}
			</div>
			<div className={styles.links}>
				{/* TODO:TEAM стилизовать и добавить иконки в теги */}
				<AppLink path={type.home}>Домой</AppLink>

				<AppLink path={type.forecast}>прогноз</AppLink>
				<AppLink path={type.story}>Архив</AppLink>
			</div>
		</div>
	)
}
