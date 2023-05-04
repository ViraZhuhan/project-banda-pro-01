const MOVIE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = 'bc9d399f277e750e98559ead1436749b';

export default class WeeklyTrendsApi {
  constructor() {}

  async fetchMovie() {
    try {
      const response = await fetch(`${MOVIE_URL}?api_key=${API_KEY}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching movie data: ' + error);
    }
  }
}
