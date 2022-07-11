const fetchProducts = async (nomeProduto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${nomeProduto}`;
  const result = await fetch(url);
  const data = await result.json();
   return data; 
};

async function requestComputador() {
  await fetchProducts('computador');
}

requestComputador();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
