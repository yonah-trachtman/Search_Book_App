import axios from 'axios';

const API_BASE_URL = 'https://www.googleapis.com/books/v1';
const API_KEY = 'AIzaSyCzEVvtwkYWlCpf12wS22ORYY3EySRcrOg'; // Your API key

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate: string;
  };
}

export const searchBooks = async (query: string): Promise<Book[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/volumes`, {
      params: {
        q: query,
        key: API_KEY,
      },
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
