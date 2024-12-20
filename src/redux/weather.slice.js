import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	current: {},
	forecast: {},
	history: {},
	astro: {},
	theme: null,
	sity: null,
}

export const weatherSlice = createSlice({
	name: 'weatherSlice',
	initialState,
	reducers: {
		setCurrent: (state, action) => {
			state.current = action.payload
			state.sity = action.payload.location.name
		},
		addForecast: (state, action) => {
			state.forecast[action.payload.day] = action.payload.forecast
		},
		addHistory: (state, action) => {
			state.history[action.payload.day] = action.payload.forecast
		},
		setAstro: (state, action) => {
			state.astro = action.payload
		},
		setTheme: (state, action) => {
			state.theme = action.payload
		},
	},
})

export const { setCurrent, addForecast, addHistory, setAstro, setTheme } =
	weatherSlice.actions

export default weatherSlice.reducer
