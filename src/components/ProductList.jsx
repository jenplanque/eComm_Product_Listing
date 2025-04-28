import React from 'react';
import styles from './ProductList.module.css';
import ProductItem from './ProductItem';

const ProductList = ({ allProducts }) => {
  return (
    <div>
      <div className={styles.products}>
        {allProducts.map((product) => (
          <ProductItem
            key={product.id}
            productStyles={styles.productItem}
            oneProduct={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
