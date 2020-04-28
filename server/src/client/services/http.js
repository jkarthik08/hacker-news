import axios from 'axios';

const getData = (query) => {
  return new Promise((resolve, reject) => {
    const page = (query.page > 0) ? query.page : 1;
    axios.get('https://hn.algolia.com/api/v1/search?tags=story&page=' + page).then((results) => {
      resolve(results);
    });
  });
}

export {
  getData
};
