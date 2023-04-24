import axios from 'axios';

const API_URL = ''; // Replace with your PayloadCMS API URL, for example, https://your-payload-cms-instance.com/api

export async function getPosts() {
  const response = await axios.get(`${API_URL}/collections/posts`);
  return response.data;
}
