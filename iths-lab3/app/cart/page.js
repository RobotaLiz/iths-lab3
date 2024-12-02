'use client';

import { useCart } from '../context/CartProvider';
import styles from './page.module.css';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className={styles.container}>
      <h1>Din Kundkorg</h1>
      {cartItems.length === 0 ? (
        <p>Din kundkorg är tom!</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item, index) => (
            <li key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price} USD</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
