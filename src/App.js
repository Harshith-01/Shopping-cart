import React, { useState } from 'react';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Samsung Galaxy S23 FE 5G (Graphite, 8GB, 256GB Storage)', category: 'Android', price: '56,500', rating: 4.0, quantity: 0, image: 'https://m.media-amazon.com/images/I/61iWInHK7jL._SX569_.jpg' },
  { id: 2, name: 'Apple iPhone 14 Pro Max (1 TB) - Gold                 ', category: 'Apple', price: '1,89,900', rating: 4.5, quantity: 0, image: 'https://m.media-amazon.com/images/I/71T5NVOgbpL._SX522_.jpg' },
  { id: 3, name: 'Samsung Galaxy S23 FE 5G (Mint, 8GB, 256GB Storage)  ', category: 'Android', price: '56,500', rating: 4.0, quantity: 0, image: 'https://m.media-amazon.com/images/I/61p1CpXdJBL._SX569_.jpg' },
  { id: 4, name: 'Apple iPhone 14 Plus (512 GB) - Blue                 ', category: 'Apple', price: '88,999', rating: 4.1, quantity: 0, image: 'https://m.media-amazon.com/images/I/61BGE6iu4AL._SX466_.jpg' },
  { id: 5, name: 'Samsung Galaxy Z Fold5 5G (Cream, 12GB RAM, 512GB Storage)', category: 'Android', price: '1,64,999', rating: 4.3, quantity: 0, image: 'https://m.media-amazon.com/images/I/716pi7fRTpL._SX569_.jpg' },
  { id: 6, name: 'Apple iPhone 14 Plus (512 GB) - Yellow                 ', category: 'Apple', price: '1,09,900', rating: 4.3, quantity: 0, image: 'https://m.media-amazon.com/images/I/71emcsxsRPL._SX466_.jpg' },
  { id: 7, name: 'Samsung Galaxy Z Fold5 5G (ICY Blue, 12GB RAM, 512GB Storage)', category: 'Android', price: '1,64,999', rating: 4.4, quantity: 0, image: 'https://m.media-amazon.com/images/I/71XwXWxa6QL._SX569_.jpg' },
  { id: 8, name: 'Apple iPhone 15 Pro (128 GB) - Blue Titanium             ', category: 'Apple', price: '1,27,990', rating: 4.2, quantity: 0, image: 'https://m.media-amazon.com/images/I/81fxjeu8fdL._SX522_.jpg' },
  { id: 9, name: 'Samsung Galaxy Z Flip5 5G (Graphite, 8GB RAM, 512GB Storage)', category: 'Android', price: '1,09,999', rating: 4.0, quantity: 0, image: 'https://m.media-amazon.com/images/I/71U+YdsvMPL._SX569_.jpg' },
  { id: 10, name: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium            ', category: 'Apple', price: '1,27,990', rating: 4.0, quantity: 0, image: 'https://m.media-amazon.com/images/I/81CgtwSII3L._SX522_.jpg' },
  { id: 11, name: 'Samsung Galaxy Z Flip5 5G (Mint, 8GB RAM, 512GB Storage)', category: 'Android', price: '1,09,999', rating: 4.1, quantity: 0, image: 'https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX569_.jpg' },
  { id: 12, name: 'Apple iPhone 15 (256 GB) - Pink', category: 'Apple', price: '80,990', rating: 4.1, quantity: 0, image: 'https://m.media-amazon.com/images/I/71bErtQPC3L._SX466_.jpg' },
  { id: 13, name: 'Samsung Galaxy S23 Ultra 5G (Cream, 12GB, 512GB Storage) ', category: 'Android', price: '1,19,999', rating: 4.2, quantity: 0, image: 'https://m.media-amazon.com/images/I/61j99uUfXNL._SX569_.jpg' },
  { id: 14, name: 'Apple iPhone 15 (256 GB) - Green                          ', category: 'Apple', price: '80,990', rating: 4.3, quantity: 0, image: 'https://m.media-amazon.com/images/I/71ZP6U9sWTL._SX466_.jpg' },
  { id: 15, name: 'Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB, 512GB Storage)', category: 'Android', price: '1,19,999', rating: 4.4, quantity: 0, image: 'https://m.media-amazon.com/images/I/61imYpK33qL._SX569_.jpg' },
  { id: 16, name: 'Apple iPhone 14 Plus (512 GB) - Starlight               ', category: 'Apple', price: '88,999', rating: 4.3, quantity: 0, image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SX466_.jpg' },
  { id: 17, name: 'Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)', category: 'Android', price: '69,999', rating: 4.1, quantity: 0, image: 'https://m.media-amazon.com/images/I/61RZDb2mQxL._SX569_.jpg' },
  { id: 18, name: 'Apple iPhone 15 Pro (1 TB) - White Titanium              ', category: 'Apple', price: '1,77,990', rating: 4.5, quantity: 0, image: 'https://m.media-amazon.com/images/I/81qlME2wWmL._SX522_.jpg' },
  { id: 19, name: 'Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 512GB Storage)', category: 'Android', price: '94,999', rating: 4.2, quantity: 0, image: 'https://m.media-amazon.com/images/I/71J8tz0UeJL._SX569_.jpg' },
  { id: 20, name: 'Apple iPhone 15 (256 GB) - Blue                           ', category: 'Apple', price: '80,990', rating: 4.1, quantity: 0, image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SX466_.jpg' },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    console.log('Checkout:', cart);
    setCart([]);
  };

  const handleFilterByCategory = (category) => {
    if (category === 'All') {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter((product) => product.category === category);
      setProducts(filteredProducts);
    }
  };

  const categories = ['All', 'Android', 'Apple'];

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="search-category">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="category-dropdown">
              <select onChange={(e) => handleFilterByCategory(e.target.value)}>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-info">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="details">
                  <h3>{product.name}</h3>
                  <div className="price-rating">
                    <p>₹{product.price}</p>
                    <p className="rating">({product.rating})⭐</p>
                  </div>
                </div>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <aside className="cart">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <p>{item.name}</p>
              <p>Price: ₹{item.price}</p>
              <p>Rating: {item.rating}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="checkout-button">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </aside>
    </div>
  );
}

export default App;