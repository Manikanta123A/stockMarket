import { configureStore } from '@reduxjs/toolkit'
import tokencreator from "./store2.js"
export const store = configureStore({
    reducer: tokencreator,
  })