import { Link } from 'react-router-dom'
import styles from './AppLink.module.css'

export default function AppLink({ children, pass, style = null }) {
	console.log('[AppLink]')
	return (
		<Link to={pass} className={styles.link} style={style}>
			{children}
		</Link>
	)
}
