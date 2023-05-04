const MOVIE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bc9d399f277e750e98559ead1436749b';

export default class GenresApi {
  constructor() {}
  
  async fetchGenres() {
    try {
      const response = await fetch(
        `${MOVIE_URL}/genre/movie/list?api_key=${API_KEY}`
      );
      const data = await response.json();
      return data.genres;
    } catch (error) {
      throw new Error('Error fetching genres data: ' + error);
    }
  }
}
