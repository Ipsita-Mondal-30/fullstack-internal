function ProductCard({ product }) {
  const { name, category, price } = product;
  return (
    <li className="product-card">
      <span className="product-name">{name}</span>
      <span className="product-meta">
        {category} - ₹{price.toLocaleString("en-IN")}
      </span>
    </li>
  );
}

export default ProductCard;
