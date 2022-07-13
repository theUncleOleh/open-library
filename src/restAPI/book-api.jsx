import axios from 'axios';
axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBM8bN6mvy3i9EyS7SL2_QRE8zd8-kLhiY';
export async function getBooks(bookName) {
  const response = await axios.get(
    `?q=${bookName}&key=${API_KEY}&maxResults=40`
  );
  return response;
}
