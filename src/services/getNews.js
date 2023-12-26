const BASE_URL = 'https://newsapi.org/v2';
const GET_EVERYTHING_ENDPOINT = 'everything';
const API_KEY = 'dceb90fe70a24aca93052ec2ee56c700';

export const fetchNews = keyword => {
  const url = `${BASE_URL}/${GET_EVERYTHING_ENDPOINT}?q=${keyword}`;
  return fetch(url, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
};
