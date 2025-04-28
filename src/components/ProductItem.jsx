import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({ oneProduct, productStyles }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  return (
    <div className={`${styles.productItem} ${productStyles}`}>
      <h4 className={styles.productName}>{oneProduct.item}</h4>
      <p className={styles.productStyle}>Style: {oneProduct.style}</p>
      <p className={styles.productColor}>Color: {oneProduct.color}</p>
      <p className={styles.productDescription}>{oneProduct.description}</p>{' '}
      <img
        className={styles.productImage}
        src={oneProduct.image}
        alt={oneProduct.item}
      />
      <p className={styles.productPrice}>Price: ${oneProduct.price}</p>
      <button
        className={styles.productButton}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {showPopup && (
        <div
          className={styles.popupMessage}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '2px solid black',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          {oneProduct.item} has been added to the cart!
        </div>
      )}
    </div>
  );
};

export default ProductItem;
