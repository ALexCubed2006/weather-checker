import AppLink from '../../shared/AppLink/AppLink'
import styles from './Nav.module.css'

export default function Nav({ type }) {
	return (
		<div className={styles.nav}>
			<div className={styles.logo}>
				<img src='/logo.png' alt='' />
			</div>
			<div className={styles.links}>
				<AppLink path={type.home}>Домой</AppLink>

				<AppLink path={type.forecast}>прогноз</AppLink>
				<AppLink path={type.story}>Архив</AppLink>
			</div>
		</div>
	)
}
