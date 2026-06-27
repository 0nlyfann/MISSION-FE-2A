import axios from "axios";

const BASE_URL = "https://6a39f805917c7b14c74c85b5.mockapi.io";

// 1. Fungsi Ambil Data Film (Get)
export const getMoviesAPI = async () => {
  const response = await axios.get(`${BASE_URL}/movies`);
  return response.data;
};

// 2. Fungsi Ambil Data Favorit (Get)
export const getFavoritesAPI = async () => {
  const response = await axios.get(`${BASE_URL}/favorites`);
  return response.data;
};

// 3. Fungsi Tambah Favorit (Add)
export const addFavoriteAPI = async (movie) => {
  const response = await axios.post(`${BASE_URL}/favorites`, {
    title: movie.title,
    image: movie.image,
    category: movie.category,
  });
  return response.data;
};

// 4. Fungsi Hapus Favorit (Delete)
export const deleteFavoriteAPI = async (favId) => {
  await axios.delete(`${BASE_URL}/favorites/${favId}`);
  return favId; // Kembalikan ID yang dihapus untuk update state Redux nanti
};

// Fungsi Simulasi Berlangganan Premium
export const subscribePremiumAPI = async () => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Muhammad Ikram Zihni",
    body: "Premium Subscription Status",
    userId: 1
  });
  return response.data;
};