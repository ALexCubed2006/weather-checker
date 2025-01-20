import { memo } from 'react'
import { ROUTES } from '../../../config'
import AppLink from '../../shared/AppLink/AppLink'
import styles from './Footer.module.css'

const Footer = memo(() => {
	return (
		<div className={styles.footer}>
			<div>
				<AppLink path={ROUTES.main}>Домой</AppLink>
				<AppLink path={ROUTES.story}>Архив</AppLink>
				<AppLink path={ROUTES.sity}>Город</AppLink>
				
			</div>
			<div className={styles.names}>
				Проект подготовлен при поддержке 
				<div>начинающих звездочек 1ФИТ2:</div>
				<div>Якубицкий Алексей</div>
				<div>Казак Анна</div>
				<div>Костюченко Анна</div>
				<div>Стельмах Карина</div>
				</div>
		</div>
	)
})

export default Footer
