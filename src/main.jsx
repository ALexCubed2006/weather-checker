import { createRoot } from 'react-dom/client'
import { LANGUAGES, THEMES } from '../config.js'
import { LanguageContext, ThemeContext } from '../context.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<ThemeContext.Provider value={THEMES.light}>
		<LanguageContext.Provider value={LANGUAGES.ru}>
			<App />
		</LanguageContext.Provider>
	</ThemeContext.Provider>,
)
