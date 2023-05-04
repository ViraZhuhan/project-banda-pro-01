const API_KEY = '225e339996bc91260b33199c383c8881';

// as looking by id
const example =
  'https://api.themoviedb.org/3/movie/550?api_key=225e339996bc91260b33199c383c8881';

// all - movie - tv - person | week - day |
const dayRoute =
  'https://api.themoviedb.org/3/trending/all/day?api_key=225e339996bc91260b33199c383c8881';
const weekRoute =
  'https://api.themoviedb.org/3/trending/all/week?api_key=225e339996bc91260b33199c383c8881';

//
const upcoming =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=225e339996bc91260b33199c383c8881';

export class Api {
  constructor() {
    this.name = 'name';
    this.year = 0;
    this.genre = 'genre';
    this.country = 'country';
  }

  async dayTrends() {
    await new Promise(r => setTimeout(r, 1000));
    return fetch(dayRoute).then(res => res.json());
  }

  async weekTrends() {
    await new Promise(r => setTimeout(r, 1000));
    return fetch(weekRoute).then(res => res.json());
  }

  async upcoming() {
    await new Promise(r => setTimeout(r, 1000));
    return fetch(upcoming).then(res => res.json());
  }

}
