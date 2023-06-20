const ProductRow = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="box" key={product.id}>
            <td>{product.name}</td>
            <td className="price">{product.price}</td>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRow;
