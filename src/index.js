import { Api } from './js/api';
const a = new Api();
a.dayTrends()
  .then(res => console.log(res))
  .catch(er => console.log(er.message));
