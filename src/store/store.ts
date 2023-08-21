import {configureStore} from '@reduxjs/toolkit'
import {CartState, LikeState} from 'src/utils/types'

import cartReducer from './cartSlice'
import likeReducer from './likeSlice'

export interface RootState {
  cart: CartState;
  like: LikeState;
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: likeReducer
  }
})
