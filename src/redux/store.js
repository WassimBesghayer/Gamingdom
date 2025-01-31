
import { configureStore } from '@reduxjs/toolkit'
import gameSlice  from './gameslice'

export const store = configureStore({
  reducer: {
    game:gameSlice
  },
})