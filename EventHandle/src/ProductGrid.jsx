import React from "react";
import Mapdemo from "../../ToDoApp/src/Map";

function ProductGrid(props) {
    let productt = props.product;

  return (
    <div className="Main">
      {productt.length === 0 ? "No Products Available" :(
      <>
        {productt.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.image} alt={product.name} className="image"/>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
      </>
      )
      }
    </div>
  );
}

export default ProductGrid;
