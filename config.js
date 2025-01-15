export const WEATHER_API_KEY = '15a662508ba94518964174204241511'

// api url
export const WEATHER_API_URL = 'https://api.weatherapi.com/v1/'
export const FORECAST_API_URL = 'https://api.weatherapi.com/v1/forecast.json'
export const HISTORY_API_URL = 'https://api.weatherapi.com/v1/history.json'
export const CURRENT_API_URL = 'https://api.weatherapi.com/v1/current.json'
export const ASTRO_API_URL = 'https://api.weatherapi.com/v1/astronomy.json'
export const ICON_API_URL = 'https://cdn.weatherapi.com/weather/64x64/day/'

// constants
export const LANGUAGES = { ru: 'ru', en: 'en' }
export const THEMES = { light: 'light', dark: 'dark', default: 'light' }
export const DAY_TIME = { day: 'day', night: 'night' }
export const DEFAULT_SITY = 'Minsk'

// get user location from browser
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			localStorage.setItem(
				'location',
				JSON.stringify({ latitude, longitude }),
			)
		},
		(error) => {
			console.warn(error.message)
		},
	)
} else {
	console.warn('Объект Geolocation не поддерживается вашим браузером')
}
export const DEFAULT_LOCATION = localStorage.getItem('location')
	? // query location
	  // q=[latitude],[longitude]
	  JSON.parse(localStorage.getItem('location')).latitude +
	  ',' +
	  JSON.parse(localStorage.getItem('location')).longitude
	: // default sity
	  DEFAULT_SITY

export const DEFAULT_LANG = localStorage.getItem('lang')
	? localStorage.getItem('lang')
	: LANGUAGES.ru

const date = new Date()
export const DEFAULT_DATE =
	date.getHours() < 21
		? date.toISOString().split('T')[0]
		: (() => {
				date.setDate(date.getDate() + 1)
				return date.toISOString().split('T')[0]
		  })()
export const DEFAULT_DAYS_COUNT = 3

// api types
export const API_DEFAULT_FORECAST_TYPES = {
	current: 'current',
	forecast: 'forecast',
	history: 'history',
}
export const API_FORECAST_TYPES = {
	...API_DEFAULT_FORECAST_TYPES,
	tomorrow: 'tomorrow',
	yesterday: 'yesterday',
	random: 'random',
	astronomy: 'astronomy',
}

export const ROUTES = {
	main: '/',
	story: '/story',
	sity: '/sity',
}

export const INDICATOR_TYPES = {
	temperature: 'temperature',
	wind: 'wind',
	pressure: 'pressure',
	clouds: 'clouds',
	humidity: 'humidity',
}

export const Locations = [
	'st. petersburg',
	'london',
	'berlin',
	'oslo',
	'new york',
	'new york city',
	'san francisco',
	'tokyo',
	'paris',
	'barcelona',
	'rio de janeiro',
	'johannesburg',
	'sydney',
	'vancouver',
	'new delhi',
	'shanghai',
	'beijing',
	'seoul',
	'los angeles',
	'mumbai',
	'melbourne',
	'singapore',
	'toronto',
	'montreal',
	'calgary',
	'edmonton',
	'winnipeg',
	'halifax',
	'quebec city',
	'charlottesville',
	'nashville',
	'atlanta',
	'orlando',
	'knoxville',
	'louisville',
	'moscow',
	'tehran',
	'jakarta',
	'kuala lumpur',
	'kathmandu',
	'kolkata',
	'chennai',
	'buenos aires',
	'santiago',
	'mexico city',
	'minsk',
	'brest',
	'vladivostok',
	'samara',
	'yekaterinburg',
	'kazan',
	'novosibirsk',
	'krasnoyarsk',
	'chelyabinsk',
	'nizhny novgorod',
	'vilnius',
	'zaporozhye',
	'kyiv',
	'kharkiv',
	'odessa',
	'lviv',
	'kherson',
	'kiev',
	'gdansk',
	'gdynia',
	'wroclaw',
	'warsaw',
	'poznan',
	'krakow',
	'grodno',
	'gomel',
	'rome',
	'bangkok',
	'shenzhen',
	'bogota',
	'lagos',
	'kinshasa',
	'khartoum',
	'cairo',
	'lahore',
	'dhaka',
	'karachi',
	'chongqing',
	'tianjin',
	'guangzhou',
	'shenyang',
	'chengdu',
	'xian',
	'changsha',
	'nanchang',
	'nanjing',
	'fuzhou',
	'hangzhou',
	'wuhan',
	'harare',
	'hanoi',
	'brisbane',
	'perth',
	'adelaide',
	'auckland',
	'cape town',
	'pretoria',
	'durban',
	'abidjan',
	'accra',
	'nairobi',
	'kampala',
	'lusaka',
	'maputo',
	'windhoek',
	'miami',
	'dallas',
	'san diego',
	'denver',
	'boston',
	'las vegas',
	'seattle',
	'portland',
	'san antonio',
	'philadelphia',
	'phoenix',
	'san jose',
	'austin',
	'jacksonville',
	'fort worth',
	'columbus',
	'charlotte',
	'indianapolis',
	'washington',
	'el paso',
	'detroit',
	'memphis',
	'oklahoma city',
	'baltimore',
	'milwaukee',
	'albuquerque',
	'tucson',
	'fresno',
	'sacramento',
	'kansas city',
	'mesa',
	'omaha',
	'colorado springs',
	'raleigh',
	'long beach',
	'virginia beach',
	'oakland',
	'minneapolis',
	'tulsa',
	'arlington',
	'tampa',
	'new orleans',
	'wichita',
	'bakersfield',
	'cleveland',
	'aurora',
	'anaheim',
	'honolulu',
	'santa ana',
	'riverside',
	'corpus christi',
	'lexington',
	'stockton',
	'henderson',
	'saint paul',
	'st. louis',
	'cincinnati',
	'pittsburgh',
	'greensboro',
	'anchorage',
	'plano',
	'lincoln',
	'irvine',
	'newark',
	'toledo',
	'durham',
	'chula vista',
	'fort wayne',
	'jersey city',
	'laredo',
	'madison',
	'chandler',
	'buffalo',
	'lubbock',
	'scottsdale',
	'reno',
	'glendale',
	'gilbert',
	'winston-salem',
	'north las vegas',
	'norfolk',
	'chesapeake',
	'garland',
	'irving',
	'hialeah',
	'fremont',
	'boise',
	'richmond',
	'baton rouge',
	'spokane',
	'des moines',
	'tacoma',
	'san bernardino',
	'modesto',
	'fontana',
	'santa clarita',
	'birmingham',
	'oxnard',
	'fayetteville',
	'moreno valley',
	'rochester',
	'huntington beach',
	'salt lake city',
	'grand rapids',
	'amarillo',
	'yonkers',
	'montgomery',
	'akron',
	'little rock',
	'huntsville',
	'augusta',
	'port st. lucie',
	'grand prairie',
	'tallahassee',
	'overland park',
	'tempe',
	'mckinney',
	'mobile',
	'cape coral',
	'shreveport',
	'frisco',
	'worcester',
	'brownsville',
	'fort lauderdale',
	'santa rosa',
	'peoria',
	'sioux falls',
	'oceanside',
	'ontario',
	'chattanooga',
	'providence',
	'newport news',
	'rancho cucamonga',
	'temecula',
	'springfield',
	'salem',
	'corona',
	'eugene',
	'mcallen',
	'fort',
	'lancaster',
	'cary',
	'palmdale',
	'hayward',
	'salinas',
	'pasadena',
	'pomona',
	'alexandria',
	'escondido',
	'sunnyvale',
	'hollywood',
	'clarksville',
	'joliet',
	'rockford',
	'torrance',
	'naperville',
	'paterson',
	'savannah',
	'bridgeport',
	'mesquite',
	'killeen',
	'syracuse',
	'bellevue',
	'fullerton',
	'orange',
	'dayton',
	'miramar',
	'thornton',
	'west valley city',
	'olathe',
	'hampton',
	'warren',
	'midland',
	'waco',
	'charleston',
	'columbia',
	'denton',
	'carrollton',
	'surprise',
	'roseville',
	'sterling heights',
	'murfreesboro',
	'gainesville',
	'cedar rapids',
	'visalia',
	'coral springs',
	'new haven',
	'stamford',
	'concord',
	'kent',
	'lafayette',
	'simi valley',
	'topeka',
	'norman',
	'fargo',
	'wilmington',
	'abilene',
	'odessa',
	'pearland',
	'victorville',
	'vallejo',
	'ann arbor',
	'berkeley',
	'allentown',
	'richardson',
	'west jordan',
	'round rock',
	'clearwater',
	'billings',
	'west palm beach',
	'pueblo',
	'lowell',
	'san buenaventura (ventura)',
	'pompano beach',
	'high point',
	'west covina',
	'manchester',
	'el monte',
	'fairfield',
	'costa mesa',
	'inglewood',
	'miami gardens',
	'elgin',
	'westminster',
	'gresham',
]

export const Langs = [
	'af',
	'sq',
	'ar',
	'hy',
	'az',
	'eu',
	'be',
	'bn',
	'bs',
	'bg',
	'ca',
	'ceb',
	'zh-CN',
	'zh-TW',
	'co',
	'hr',
	'cs',
	'da',
	'nl',
	'en',
	'en-GB',
	'en-US',
	'eo',
	'et',
	'fi',
	'fr',
	'fy',
	'gl',
	'ka',
	'de',
	'el',
	'gu',
	'ht',
	'ha',
	'haw',
	'he',
	'hi',
	'hmn',
	'hu',
	'is',
	'ig',
	'id',
	'ga',
	'it',
	'ja',
	'jw',
	'kn',
	'kk',
	'km',
	'ko',
	'ku',
	'ky',
	'lo',
	'la',
	'lv',
	'lt',
	'lb',
	'mk',
	'mg',
	'ms',
	'ml',
	'mt',
	'mi',
	'mr',
	'mn',
	'my',
	'ne',
	'no',
	'ny',
	'or',
	'ps',
	'fa',
	'pl',
	'pt',
	'pa',
	'ro',
	'ru',
	'sm',
	'gd',
	'sr',
	'st',
	'sn',
	'sd',
	'si',
	'sk',
	'sl',
	'so',
	'es',
	'su',
	'sw',
	'sv',
	'tg',
	'ta',
	'te',
	'th',
	'tr',
	'uk',
	'ur',
	'ug',
	'uz',
	'vi',
	'cy',
	'xh',
	'yi',
	'yo',
	'zu',
	'zu',
	'aa',
	'ab',
	'ae',
	'ak',
	'am',
	'an',
	'av',
	'ay',
	'ba',
	'bi',
	'bo',
	'br',
	'ch',
	'cr',
	'dv',
	'dz',
	'ee',
	'fj',
	'fo',
	'gn',
	'gv',
	'ho',
	'ii',
	'ik',
	'io',
	'iu',
	'kg',
	'kj',
	'kr',
	'ks',
	'kv',
	'kw',
	'li',
	'ln',
	'lu',
	'mh',
	'na',
	'ng',
	'nn',
	'nr',
	'nv',
	'oc',
	'oj',
	'pi',
	'rm',
	'rn',
	'sc',
	'sg',
	'sh',
	'ss',
	'ti',
	'tk',
	'tn',
	'ts',
	'ty',
	'vo',
	'wa',
	'wo',
	'za',
]
