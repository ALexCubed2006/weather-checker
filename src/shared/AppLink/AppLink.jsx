import { Link } from 'react-router-dom'
import styles from './AppLink.module.css'

export default function AppLink({ children, path, style = null }) {
	return (
		
		<Link to={path} className={styles.link} style={style}>
			{children}
		</Link>
	)
}
