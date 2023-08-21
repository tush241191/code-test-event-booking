import {RootState} from './store'

export const selectCartItems = (state: RootState) => state.cart.items
export const selectLikeItems = (state: RootState) => state.like.items
