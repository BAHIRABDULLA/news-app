// lib/newsService.ts
import axios from 'axios';


const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const BASE_URL = 'https://newsapi.org/v2';

const fetchNews = async (category: string = 'general', pageSize: number = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        pageSize,
        apiKey: API_KEY,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news", error);
    return [];
  }
};

export default fetchNews;
