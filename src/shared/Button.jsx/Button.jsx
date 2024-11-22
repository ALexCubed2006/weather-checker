import styles from './Button.module.css'

export default function Button({ children, onClick, className = null }) {
	return (
		<button
			className={className ? className : styles.button}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
