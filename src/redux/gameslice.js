import { createSlice } from '@reduxjs/toolkit'
import AddGame from '../components/AddGame'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    deleteGame: (state, action) => {
      state.GameList=state.GameList.filter((el)=>el.id !== action.payload.id)
    },
    addGame: (state, action) => {
      state.GameList.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addGame, deleteGame } = gameslice.actions

export default gameslice.reducer