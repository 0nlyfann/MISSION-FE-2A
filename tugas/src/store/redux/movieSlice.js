import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],       // Untuk menampung semua film dari API
    favorites: [],  // Untuk menampung daftar favorit 
  },
  reducers: {
    // Reducer untuk menyimpan data film dari API ke global state
    setMovies: (state, action) => {
      state.list = action.payload;
    },
    // Reducer untuk menyimpan data favorit dari API ke global state
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    // Reducer untuk menambah favorit di global state
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    // Reducer untuk menghapus favorit di global state
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { setMovies, setFavorites, addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;