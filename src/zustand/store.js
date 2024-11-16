import { create } from 'zustand'

const initState = {}

const useStore = create((set) => ({
    state: initState,
}))
