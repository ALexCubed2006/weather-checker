import styles from './Button.module.css'

export default function Button({ children, onClick, style = null }) {
	return (
		<button className={styles.button} style={style} onClick={onClick}>
			{children}
		</button>
	)
}
