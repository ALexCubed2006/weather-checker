import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Locations } from '../../../config'
import styles from './Searcher.module.css'
export default function Searcher() {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const [isCheckPassed, setIsCheckPassed] = useState(false)
	const buttonRef = useRef(null)
	const inputRef = useRef(null)

	const buttonStyles = {
		backgroundColor: isCheckPassed ? 'gray' : 'black',
	}

	function handleSearch() {
		if (!isCheckPassed) {
			console.log('not found')
			return
		}

		navigate('/sity/' + search)
	}

	function checkInput(query) {
		console.log('[checkInput]', query)
		if (query === '') {
			setIsCheckPassed(() => false)
		}

		if (Locations.includes(query.toLowerCase())) {
			console.log('found')
			setIsCheckPassed(() => true)
		}

		if (!Locations.includes(query.toLowerCase())) {
			setIsCheckPassed(() => false)
		}
	}

	return (
		<div className={styles.searcher}>
			<div>
				<img
					src='ОблычноCпрояснениями.png'
					className={styles.embleme}
				/>
			</div>
			<div className={styles.searchline}>
				<input
					style={{ color: 'black' }}
					className={styles.input}
					ref={inputRef}
					type='text'
					value={search}
					onChange={(e) => {
						setSearch(e.target.value)
						checkInput(e.target.value)
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							buttonRef.current.click()
							inputRef.current.blur()
						}
						if (e.key === 'Escape') {
							inputRef.current.value = ''
							setSearch('')
							inputRef.current.blur()
						}
					}}
					placeholder='введите город'
				/>
				<button
					onClick={handleSearch}
					ref={buttonRef}
					style={buttonStyles}
					disabled={!isCheckPassed}
					className={styles.find}
				>
					Поиск
				</button>
			</div>
		</div>
	)
}
