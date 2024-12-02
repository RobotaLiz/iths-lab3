'use client';

import { useEffect, useState } from 'react';
import { useCart } from './context/CartProvider';
import styles from './page.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Error');
        const data = await response.json();
        setProducts(data);
        console.log(data[0]);
      } catch (error) {
        console.error('Error when getting products', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Webbshop</h1>
      <div className={styles.grid}>
        {products.map((product) => 
        (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.price}>{product.price} USD</p>
            <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
