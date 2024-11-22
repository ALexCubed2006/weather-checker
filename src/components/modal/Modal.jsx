import { useState } from 'react'
import styles from './Modal.module.css'

export default function Modal({ children }) {
	const [open, setOpen] = useState(true)
	return (
		<div
			className={open ? styles.modal : styles.modalDisabled}
			onClick={() => setOpen(false)}
		>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
