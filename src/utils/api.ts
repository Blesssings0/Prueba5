import { ApiResponse } from "../types";

const API_BASE_URL = 'https://vercel-taupe-eta.vercel.app';

export async function fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    return { data: [], error: 'Failed to fetch data' };
  }
}