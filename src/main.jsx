import { createRoot } from 'react-dom/client'
import { LanguageContext, ThemeContext } from '../context.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<ThemeContext.Provider value='light'>
		<LanguageContext.Provider value='ru'>
			<App />
		</LanguageContext.Provider>
	</ThemeContext.Provider>,
)
