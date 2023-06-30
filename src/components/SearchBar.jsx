import { useState } from 'react';

const SearchBar = ({ products }) => {
  const [searchInput, setSearchInput] = useState('');
  const [inStock, setInStock] = useState(false);
  const handleInStock = ({ target }) => {
    setInStock(target.checked);
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (inStock) {
      return (
        product.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        product.inStock
      );
    } else {
      return product.name.toLowerCase(searchInput.toLowerCase());
    }
  });

  /* const handleChange = (event) => {
    const results = products.filter((product) => {
      if (event.target.value === '') {
        return product.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }
    });
    event.preventDefault();
    setSearchInput({ query: event.target.value, list: results });
  }; */

  return (
    <div className="search">
      <form>
        <h2>Search</h2>
        <p className="bar">
          {' '}
          <label>
            {filteredProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </label>
          <input
            type="text"
            name="searchInput"
            value={searchInput}
            onChange={handleSearch}
          />
        </p>

        <p>
          {' '}
          <label>
            Only show products in stock
            <input
              type="checkbox"
              name="inStock"
              checked={inStock}
              onChange={handleInStock}
            ></input>
          </label>
        </p>
      </form>
      {/* <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchBar;
