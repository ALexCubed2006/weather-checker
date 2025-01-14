import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Locations } from '../../../config'
import styles from './Searcher.module.css'
import weather_icon from '../../public/Облычно с прояснениями.png'
export default function Searcher() {
	console.log('[Searcher]')
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const [isCheckPassed, setIsCheckPassed] = useState(false)
	const buttonRef = useRef(null)
	const inputRef = useRef(null)

	// TODO:TEAM добавить стили для кнопки
	const buttonStyles = {
		// если isCheckPassed === true применяются первые стили, иначе вторые
		backgroundColor: isCheckPassed ? 'green' : 'black',
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
			<div><img src={weather_icon} alt=""/></div>
			<div className={styles.searchline}><input
				// TODO:TEAM добавить стили
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
			/>
			<button
				onClick={handleSearch}
				ref={buttonRef}
				style={buttonStyles}
				disabled={!isCheckPassed}
				className={styles.find}
			>
				Поиск
			</button></div>
		</div>
	)
}
