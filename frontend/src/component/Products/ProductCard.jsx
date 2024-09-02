import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import currency from "currency-formatter";
// import './ProductCard.css'; // Import the CSS here

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  
  return (
    <div style={{ boxShadow: "none" }}>
      <Link className="ProductCard" to={`/product/${product._id}`}>
        <img
          src={product.images[0].url}
          alt={product.name}
          className="ProductImg"
        />
        <p className="productName">{product.name}</p>
        
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="offerPriceBox">
            <h1 className="discountPrice">
              {product.offerPrice > 0 ? `${product.offerPrice} (đ)` : ""}
            </h1>
            <span className="p__Price">{`${currency.format(product.price, { code: "VND" })}`}</span>
            <span>(Còn {`${product.Stock}`})</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;