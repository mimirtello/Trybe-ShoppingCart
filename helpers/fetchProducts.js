const fetchProducts = async (nomeProduto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${nomeProduto}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

async function requestComputador() {
  const data = await fetchProducts('computador');
  return data;
}

// requestComputador();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
