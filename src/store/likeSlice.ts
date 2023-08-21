import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {EventData} from 'src/feature/landing/types'
import {LikeState} from 'src/utils/types'

const initialState: LikeState = {
  items: []
}

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    like(state, action: PayloadAction<EventData>) {
      state.items.push(action.payload)
    },
    unlike(state, action: PayloadAction<EventData>) {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    }
  }
})

export const {like, unlike} = likeSlice.actions

export default likeSlice.reducer
