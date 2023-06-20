// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';

import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const searchHandler = (searchedValue) => {
    const productsCopy = [...jsonData];
    const filteredProducts = productsCopy.filter((product) => {
      if (product.name.toLowerCase().includes(searchedValue.toLowerCase())) {
        return product;
      }
    });
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar filteredProducts={searchHandler} />

      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
