import { getFavoriteAssets } from './../../../thunks/assests/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  assets: [],
  favoriteAssets: []
}

export const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
      state.favoriteAssets.push(action.payload)
    })
  }
})

export default assetSlice.reducer
