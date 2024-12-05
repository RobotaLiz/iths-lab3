'use client';

import styles from './ProductModal.module.css';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <img src={product.image} alt={product.title} className={styles.image} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className={styles.price}>{product.price} USD</p>
          <button className={styles.addToCartButton} onClick={() => onAddToCart(product)}>
            Lägg till i kundkorg
          </button>
        </div>
      </div>
    </div>
  );
}
