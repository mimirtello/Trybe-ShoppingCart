require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste de fetchProducts é uma função', () => {
    expect (typeof fetchProducts).toEqual('function')
  })
  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async() => {
    await fetchProducts('computador')
    expect (fetch).toHaveBeenCalled();
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint solicitado', async() => {
    await fetchProducts('computador')
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect (fetch).toBeCalledWith(url);
  })
  it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async() => {
    const result = await fetchProducts('computador')
    expect (result).toEqual(computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async() => {
    try{
      await fetchProducts();
    }catch (error){
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
  // fail('Teste vazio');
});
