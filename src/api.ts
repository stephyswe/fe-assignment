const BASE_URL = "https://api.tvmaze.com/";

export const searchShows = async (query: string) => {
  const response = await fetch(`${BASE_URL}search/shows?q=${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getShowByNameFullSearch = async (name: string) => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const results = await response.json();
  return results[0]?.show;  // Assuming the most relevant result is first
};

export const searchSingleShow = async (query: string) => {
  const response = await fetch(`${BASE_URL}singlesearch/shows?q=${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

