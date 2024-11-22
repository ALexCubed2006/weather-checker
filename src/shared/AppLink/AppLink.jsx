import { Link } from 'react-router-dom'
import styles from './AppLink.module.css'

export default function AppLink({ children, pass, className = null }) {
	return (
		<Link to={pass} className={className ? className : styles.link}>
			{children}
		</Link>
	)
}
