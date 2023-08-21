import {configureStore, EnhancedStore} from '@reduxjs/toolkit'
import {EventData} from 'src/feature/landing/types'

import likeReducer, {like, unlike} from '../likeSlice'
import {mockEventData} from './mockData/eventData'

describe('likeSlice', () => {

  let store: EnhancedStore

  beforeEach(() => {
    store = configureStore({
      reducer: {
        like: likeReducer
      }
    })
  })

  it('should add an item to the like list', () => {
    const event: EventData = mockEventData[0]

    store.dispatch(like(event))

    const state = store.getState().like
    expect(state.items.length).toBe(1)
    expect(state.items[0].id).toBe(1)
  })

  it('should remove an item from the like list', () => {
    const event: EventData = mockEventData[1]

    store.dispatch(like(event))
    store.dispatch(unlike(event))

    const state = store.getState().like
    expect(state.items.length).toBe(0)
  })

})
