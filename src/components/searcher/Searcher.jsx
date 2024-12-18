import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Locations } from '../../../config'

export default function Searcher() {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const buttonRef = useRef(null)
	const inputRef = useRef(null)

	function handleSearch() {
		if (!checkInput(search)) {
			console.log('not found')
			return
		}

		navigate('/sity/' + search)
	}

	function checkInput(query) {
		if (query === '') {
			return false
		}

		if (Locations.includes(query)) {
			return true
		}

		return false
	}

	return (
		<div>
			<input
				style={{ color: 'black' }}
				ref={inputRef}
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
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
			<button onClick={handleSearch} ref={buttonRef}>
				Search
			</button>
		</div>
	)
}
