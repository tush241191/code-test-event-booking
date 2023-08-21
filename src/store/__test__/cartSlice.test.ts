import {configureStore, EnhancedStore} from '@reduxjs/toolkit'
import {EventData} from 'src/feature/landing/types'

import cartReducer, {addToCart, removeFromCart, updateCartItemQuantity} from '../cartSlice'
import {mockEventData} from './mockData/eventData'

describe('cartSlice functionality', () => {
  let store: EnhancedStore

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer
      }
    })
  })

  it('should add an item to the cart', () => {
    const event: EventData = mockEventData[0]

    store.dispatch(addToCart({event}))

    const state = store.getState().cart
    expect(state.items.length).toBe(1)
    expect(state.items[0].event.id).toBe(1)
    expect(state.items[0].quantity).toBe(1)
  })

  it('should remove an item from the cart', () => {
    const event: EventData = mockEventData[1]

    store.dispatch(addToCart({event}))
    store.dispatch(removeFromCart({event}))

    const state = store.getState().cart
    expect(state.items.length).toBe(0)
  })

  it('should update the quantity of an item in the cart', () => {
    const event: EventData = mockEventData[2]

    store.dispatch(addToCart({event}))
    store.dispatch(updateCartItemQuantity({eventId: 3, quantity: 3}))

    const state = store.getState().cart
    expect(state.items.length).toBe(1)
    expect(state.items[0].event.id).toBe(3)
    expect(state.items[0].quantity).toBe(3)
  })
})
