const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};
fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
