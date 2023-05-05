const MOVIE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '225e339996bc91260b33199c383c8881';

// as looking by id
const example = `${MOVIE_URL}movie/550?api_key=${API_KEY}`;

// all - movie - tv - person | week - day |
const dayRoute = `${MOVIE_URL}trending/all/day?api_key=${API_KEY}`;
const weekRoute = `${MOVIE_URL}trending/all/week?api_key=${API_KEY}`;

// genres
const genresRoute = `${MOVIE_URL}/genre/movie/list?api_key=${API_KEY}`;

//
const upcoming = `${MOVIE_URL}all/upcoming?api_key=${API_KEY}`;

export default class Api {
  constructor() {
    this.name = 'name';
    this.year = 0;
    this.genre = 'genre';
    this.country = 'country';
  }

  async dayTrends() {
    try {
      const response = await fetch(dayRoute);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching movie data: ' + error);
    }
  }

  async weekTrends() {
    try {
      const response = await fetch(weekRoute);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching movie data: ' + error);
    }
  }

  async upcoming() {
    try {
      const response = await fetch(upcoming);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching movie data: ' + error);
    }
  }

  async fetchGenres() {
    try {
      const response = await fetch(genresRoute);
      const data = await response.json();
      return data.genres;
    } catch (error) {
      throw new Error('Error fetching genres data: ' + error);
    }
  }

}
