const API_BASE_URL = 'https://vercel-taupe-eta.vercel.app';

export async function fetchAuthors() {
  const response = await fetch(`${API_BASE_URL}/authors`);
  return response.json();
}

export async function fetchBooks() {
  const response = await fetch(`${API_BASE_URL}/books`);
  return response.json();
}

export async function fetchAvailableBooks() {
  const response = await fetch(`${API_BASE_URL}/books/available`);
  return response.json();
}

export async function fetchUnavailableBooks() {
  const response = await fetch(`${API_BASE_URL}/books/unavailable`);
  return response.json();
}