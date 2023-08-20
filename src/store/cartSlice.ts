// cartSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {EventData} from 'src/feature/landing/types'
import {CartState} from 'src/utils/types'

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ event: EventData; }>) => {
      const existingItem = state.items.find(item => item.event.id === action.payload.event.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({event: action.payload.event, quantity: 1})
      }
    },
    removeFromCart: (state, action: PayloadAction<{ event: EventData; }>) => {
      state.items = state.items.filter(item => item.event.id !== action.payload.event.id)
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ eventId: number; quantity: number; }>) => {
      const {eventId, quantity} = action.payload
      const itemToUpdate = state.items.find(item => item.event.id === eventId)

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    }
  }
})

export const {addToCart, removeFromCart, updateCartItemQuantity} = cartSlice.actions

export default cartSlice.reducer
