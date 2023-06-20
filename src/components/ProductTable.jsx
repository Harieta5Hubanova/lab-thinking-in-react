import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <div className="table">
      <table>
        <tr className="table-name">
          <th className="name1">Name</th>
          <th className="price1">Price</th>
        </tr>
        <tr>
          <td className="product">
            <ProductRow products={products} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ProductTable;
