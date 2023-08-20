import {configureStore} from '@reduxjs/toolkit'
import {CartState} from 'src/utils/types'

import cartReducer from './cartSlice'

export interface RootState {
  cart: CartState;
}

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
