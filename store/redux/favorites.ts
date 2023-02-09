import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Meal from "../../models/meal";

type Id = Meal['id']

interface FavoritesState {
  ids: Id[]
}

const initialState: FavoritesState = {
  ids: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Id>) => {
      console.log('adding to favs')
      state.ids.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<Id>) => {
      console.log('removing to favs')

      state.ids.splice(state.ids.indexOf(action.payload), 1);
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
