import { memo } from 'react'
import { ROUTES } from '../../../config'
import AppLink from '../../shared/AppLink/AppLink'
import styles from './Footer.module.css'

const Footer = memo(() => {
	// TODO:TEAM расположите footer в нижнюю часть страницы
	// TODO: сделать footer
	return (
		<div className={styles.footer}>
			<div>
				<AppLink path={ROUTES.main}>Домой</AppLink>
				<AppLink path={ROUTES.story}>Архив</AppLink>
				<AppLink path={ROUTES.sity}>Город</AppLink>
			</div>
			
		</div>
	)
})

export default Footer
