const BASE_URL = 'https://restcountries.com/v2';

async function fetchCountries(searchQuery) {
  const response = await fetch(`${BASE_URL}/name/${searchQuery}`);

  if (!response.ok) {
    throw new Error();
  }

  return await response.json();
}

export default { fetchCountries };
