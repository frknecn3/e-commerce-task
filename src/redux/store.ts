import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { productApi } from '../utils/api'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
