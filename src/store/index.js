import { configureStore } from '@reduxjs/toolkit'
import globalStateSlice from './globalStateSlice'

export default configureStore({
  reducer: {
    globalState: globalStateSlice,
  },
})
