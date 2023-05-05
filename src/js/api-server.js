export class ApiServer {
  #API_KEY = '225e339996bc91260b33199c383c8881';
  #dayTops = 'https://api.themoviedb.org/3/trending/all/day?';
  #weekTops = 'https://api.themoviedb.org/3/trending/all/week?';
  #upcoming = 'https://api.themoviedb.org/3/all/upcoming?&language=en-US';

  constructor() {
    this.page = 1;
  }

  nextPage() {
    this.page += 1;
  }
  prevPage() {
    this.page -= 1;
  }
  setPage(value) {
    this.page = value;
  }
  getCurrentPage() {
    return this.page;
  }
  reset() {
    this.page = 1;
  }

  // [] для фильма дня
  async dayTrends() {
    await new Promise(r => setTimeout(r, 1000));
    return fetch(
      `${this.#dayTops}api_key=${this.#API_KEY}&page=${this.page}`
    ).then(res => res.json());
  }

  // [] для фильмов недели
  async weekTrends() {
    await new Promise(r => setTimeout(r, 1000));
    return fetch(
      `${this.#weekTops}api_key=${this.#API_KEY}&page=${this.page}`
    ).then(res => res.json());
  }

  // [] для новинок
  async upcoming() {
    await new Promise(r => setTimeout(r, 1000));
    return fetch(
      `${this.#upcoming}&api_key=${this.#API_KEY}&page=${this.page}`
    ).then(res => res.json());
  }

  // {} для модалки с полной инфо
  async getDetailsById(id) {
    const str = `https://api.themoviedb.org/3/movie/${id}?api_key=${
      this.#API_KEY
    }`;
    await new Promise(r => setTimeout(r, 1000));
    return fetch(str).then(res => res.json());
  }

  // [] список всех стран
  async countries() {
    const str = `https://api.themoviedb.org/3/configuration/countries?api_key=${
      this.#API_KEY
    }`;
    await new Promise(r => setTimeout(r, 1000));
    return fetch(str).then(res => res.json());
  }

  // [] список всех жанров
  async genres() {
    const str = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      this.#API_KEY
    }&language=en-US`;
    await new Promise(r => setTimeout(r, 1000));
    return fetch(str).then(res => res.json());
  }

  // [] поиск по назв, год, стр, принимает {query: string, year: int, page: int}
  // фильтровать по: | 'release_date' | 'genre_ids' | 'origin_country'(не везде)
  async searhByNameYear(obj = {}) {
    let str = `https://api.themoviedb.org/3/search/movie?api_key=${
      this.#API_KEY
    }&language=en-US&include_adult=false`;

    const keys = Object.keys(obj);

    if (keys.length !== 0) {
      for (const key of keys) {
        if (
          ((key === 'year' || key === 'query' || key === 'page') &&
            obj[key]) !== null
        ) {
          str += `&${key}=${obj[key]}`;
        }
      }
    }

    await new Promise(r => setTimeout(r, 1000));
    return fetch(str).then(res => res.json());
  }
}
