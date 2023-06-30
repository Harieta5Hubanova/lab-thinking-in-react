const ProductRow = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            className="box"
            key={product.id}
            style={{ color: product.inStock ? 'black' : 'red' }}
          >
            <td>{product.name}</td>
            <td className="price">{product.price}</td>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRow;
