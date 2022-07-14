// const lista = require('./helpers/getSavedCartItems');

// const saveCartItems = require('./helpers/saveCartItems');
const itemsCart = document.querySelector('.cart__items');
const btnEsvaziar = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

function precoTotal() {
  const totalPreco = document.querySelector('.total-price');
  itemChild = itemsCart.children;
  const preco = Array.from(itemChild);
  const precoFinal = [];
  preco.forEach((item) => precoFinal.push(item.innerHTML.split('$')[1]));
  const total = precoFinal.reduce((acc, produto) => acc + Number(produto), 0);
  
  totalPreco.innerHTML = (Math.round(total * 100) / 100);
  }

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};
const cartItemClickListener = (event) => {
  event.target.remove();
  precoTotal();
 };

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  
  return li; 
};
async function listarCartItens(item) {
  // const itemsCart = document.querySelector('.cart__items');
    const produtoCart = await fetchItem(item);
      const itemProductCart = createCartItemElement({
        sku: produtoCart.id,
        name: produtoCart.title,
        salePrice: produtoCart.price,
    });
    
    itemsCart.appendChild(itemProductCart); 
    const cartItemsave = itemsCart.innerHTML;
    precoTotal();
    saveCartItems(cartItemsave);
    // session
  }

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

function listarCart() {
 const btnAdicionar = document.querySelectorAll('.item__add');
   btnAdicionar.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const valueId = event.target.parentNode;
      const id = getSkuFromProductItem(valueId);
      listarCartItens(id);    
   });
  });
}

async function listarItens() {
  const items = document.querySelector('.items');
  const computador = await requestComputador();
  computador.results.forEach((pc) => {  
    const itemProduct = createProductItemElement({
      sku: pc.id,
      name: pc.title,
      image: pc.thumbnail,
  });
    items.appendChild(itemProduct);
 });
 
 listarCart();
}

function esvaziarCarrinho() {
btnEsvaziar.addEventListener('click', () => {
  itemsCart.innerHTML = '';
});
}

window.onload = () => { 
  const lista = getSavedCartItems(); 
  document.querySelector('.cart__items').innerHTML = lista;
   
  itemsCart.addEventListener('click', cartItemClickListener);
   listarItens();
   precoTotal();
   esvaziarCarrinho();
 };
