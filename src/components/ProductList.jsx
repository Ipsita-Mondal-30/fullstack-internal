import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="no-results">No products found</p>;
  }
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
