import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './Features/token'

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
})
