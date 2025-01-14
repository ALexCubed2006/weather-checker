import { memo } from 'react'
import { ROUTES } from '../../../config'
import AppLink from '../../shared/AppLink/AppLink'

const Footer = memo(() => {
	// TODO:TEAM расположите footer в нижнюю часть страницы
	// TODO: сделать footer
	return (
		<div>
			<div>
				<AppLink path={ROUTES.main}>home</AppLink>
				<AppLink path={ROUTES.story}>story</AppLink>
				<AppLink path={ROUTES.sity}>sity</AppLink>
			</div>
			
		</div>
	)
})

export default Footer
