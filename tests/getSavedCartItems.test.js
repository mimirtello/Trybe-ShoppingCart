const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect (localStorage.getItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {
    getSavedCartItems('cartItems')
    expect (localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  it('Verifica se é uma função', () => {
    expect(typeof (getSavedCartItems)).toBe('function');
  });
  // fail('Teste vazio');
});
