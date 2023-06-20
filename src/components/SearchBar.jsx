import { useState } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [inStock, setInStock] = useState(false);
  const handleInStock = ({ target }) => {
    setInStock(target.checked);
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

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
          <label></label>
          <input
            type="text"
            name="searchInput"
            value={searchInput}
            onChange={handleSearch}
          />
        </p>

        <p>
          {' '}
          <label>Only show products in stock </label>
          <input
            type="checkbox"
            name="inStock"
            checked={inStock}
            onChange={handleInStock}
          ></input>
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
