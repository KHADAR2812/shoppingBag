import React, { useState } from "react";

const fallbackImage = "https://via.placeholder.com/100?text=No+Image";

const ProductItem = ({ product, updateQuantity, updateImage }) => {
  const [editing, setEditing] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState(product.image);

  const handleSave = () => {
    updateImage(product.id, newImageUrl);
    setEditing(false);
  };

  
  const viewImage = () => {
    window.open(product.image, "_blank");
  };

  return (
    <div className="product-item">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
      />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="price">Rs.{product.price.toFixed(2)}</p>
        <p>Size: {product.size}</p>
        <p>Color: {product.color}</p>
        <div className="quantity-control">
          <button onClick={() => updateQuantity(product.id, -1)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>
        <div className="edit-image-section">
          {editing ? (
            <>
              <input
                type="text"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setEditing(true)}>Edit Image</button>
              <button onClick={viewImage}>View Image</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
