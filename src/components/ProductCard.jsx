import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="productcard">
        <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <h4>{product.price}</h4>
      <button className="product-Card">Add to Cart</button>

    </div>
  );
}

export default ProductCard;