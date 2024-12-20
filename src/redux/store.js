import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weather.slice'

const reducer = {
	weather: weatherSlice,
}

export default configureStore({
	reducer,
})
